import dotenv from 'dotenv'
import { AtpAgent, BlobRef } from '@atproto/api'
import fs from 'fs/promises'
import { ids } from '../src/lexicon/lexicons'

export const FEEDGEN_PUBLISHER_DID = 'did:plc:5s4zztsxcuzb66q6cjumqwqr'
export const FEEDGEN_HOSTNAME = 'bluesky-sf-irl-05af32605927.herokuapp.com'

const run = async () => {
  dotenv.config()

  // THESE TWO SHOULD BE FILLED OUT IN .env
  const handle = process.env.HANDLE ?? ''
  const password = process.env.APP_PASSWORD ?? ''

  // A short name for the record that will show in urls
  // Lowercase with no spaces.
  // <15 characters
  const recordName = 'sf-irl'

  // A display name for your feed
  // Ex: What's Hot
  const displayName = 'San Francisco IRL'

  // (Optional) A description of your feed
  // Ex: Top trending content from the whole network
  const description = 'In-Person Events for Tech Professionals'

  // (Optional) The path to an image to be used as your feed's avatar
  // Ex: ~/path/to/avatar.jpeg
  const avatar: string = 'logo.jpg'
  const header: string = 'header.jpg'
  // -------------------------------------
  // NO NEED TO TOUCH ANYTHING BELOW HERE
  // -------------------------------------

  if (!FEEDGEN_PUBLISHER_DID && !FEEDGEN_HOSTNAME) {
    throw new Error('Please provide a hostname in the .env file')
  }
  const feedGenDid = `did:web:${FEEDGEN_HOSTNAME}`

  // only update this if in a test environment
  const agent = new AtpAgent({ service: 'https://bsky.social' })
  await agent.login({ identifier: handle, password })

  console.log(feedGenDid, FEEDGEN_HOSTNAME, FEEDGEN_PUBLISHER_DID)

  let avatarRef: BlobRef | undefined
  if (avatar) {
    let encoding: string
    if (avatar.endsWith('png')) {
      encoding = 'image/png'
    } else if (avatar.endsWith('jpg') || avatar.endsWith('jpeg')) {
      encoding = 'image/jpeg'
    } else {
      throw new Error('expected png or jpeg')
    }
    const img = await fs.readFile(avatar)
    const blobRes = await agent.api.com.atproto.repo.uploadBlob(img, {
      encoding,
    })
    avatarRef = blobRes.data.blob
  }

  let headerRef: BlobRef | undefined
  if (header) {
    let encoding: string
    if (header.endsWith('png')) {
      encoding = 'image/png'
    } else if (header.endsWith('jpg') || header.endsWith('jpeg')) {
      encoding = 'image/jpeg'
    } else {
      throw new Error('expected png or jpeg')
    }

    const headerImg = await fs.readFile(header)

    const blobRes = await agent.api.com.atproto.repo.uploadBlob(headerImg, {
      encoding,
    })
    headerRef = blobRes.data.blob
  }

  await agent.api.com.atproto.repo.putRecord({
    repo: agent.session?.did ?? '',
    collection: ids.AppBskyFeedGenerator,
    rkey: recordName,
    record: {
      did: feedGenDid,
      displayName: displayName,
      description: description,
      avatar: avatarRef,
      header: headerRef,
      createdAt: new Date().toISOString(),
    },
  })

  console.log('All done 🎉')
}

run()
