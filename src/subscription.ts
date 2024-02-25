import {
  OutputSchema as RepoEvent,
  isCommit,
} from './lexicon/types/com/atproto/sync/subscribeRepos'
import parsePost from './openai/parse';
import { FirehoseSubscriptionBase, getOpsByType } from './util/subscription'
import { locationKeywords, techKeywords } from './util/terms'

const authorsTable = {}

function matchesKeywordCaseInsensitive(input: string, keywords: string[]): boolean {
  return keywords.some(keyword => {
    const regex = new RegExp(keyword, 'i'); // 'i' flag for case-insensitive
    return regex.test(input);
  });
}


export class FirehoseSubscription extends FirehoseSubscriptionBase {
  async handleEvent(evt: RepoEvent) {
    if (!isCommit(evt)) return
    const ops = await getOpsByType(evt)

    // This logs the text of every post off the firehose.
    // Just for fun :)
    // Delete before actually using
    for (const post of ops.posts.creates) {
    }

    const postsToDelete = ops.posts.deletes.map((del) => del.uri)
    const postsToCreate = ops.posts.creates
      .filter((create) => {
        // only alf-related posts

        if (
          authorsTable[create.author] ||
          matchesKeywordCaseInsensitive(create.record.text.toLowerCase(), locationKeywords)
        )
          // check if text contains text content from 1st array and 2nd array
          // define arrays 1 and 2
          // regex
          return true
      })
      .map((create) => {
        // map alf-related posts to a db row
        console.log(create)

        return {
          uri: create.uri,
          cid: create.cid,
          replyParent: create.record?.reply?.parent.uri ?? null,
          replyRoot: create.record?.reply?.root.uri ?? null,
          indexedAt: new Date().toISOString(),
          author: create.author,
          text: create.record.text
        }
      })

    let rr = await postsToCreate.map(async (create) => {
      try {

        let post = await parsePost(create.text)

        // REPOST


      } catch (e) {
        console.log(e)
      }
    })


    postsToCreate.map(({ author }) => {
      authorsTable[author] = true
    })

    if (postsToDelete.length > 0) {
      await this.db
        .deleteFrom('post')
        .where('uri', 'in', postsToDelete)
        .execute()
    }

    let p2c = postsToCreate.map((a) => {
      //@ts-ignore
      delete a['text']
      return a;
    }
    )
    if (p2c.length > 0) {
      await this.db
        .insertInto('post')
        .values(p2c)
        .onConflict((oc) => oc.doNothing())
        .execute()
    }
  }
}
