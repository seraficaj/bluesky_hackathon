import dayjs from "dayjs";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: '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' });


type EventInfo = {
    date: string
    time: string
    location: string
}

function extractUserIdAndKeyId(url: string): { userId: string, keyId: string } | null {
    const pattern = /at:\/\/did:plc:(.+?)\/app\.bsky\.feed\.post\/(.+)/;
    const match = url.match(pattern);
    if (match) {
        return { userId: match[1], keyId: match[2] };
    } else {
        return null;
    }
}


export function convertAtUrlToClickableLink(d: string) {
    let result = extractUserIdAndKeyId(d
    );

    if (!result) {
        return ""
    }

    let url = `https://bsky.app/profile/did:plc:${result['userId']}/post/${result['keyId']}`

    console.log(url)
    return url;
}


export default async function parsePost(post: string): Promise<EventInfo | null> {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: "user", content: `Please extract time and date, and location information, as JSON. 

        Today's date is ${dayjs()}

        Return three fields, 'time' 'date' and 'location'.
        
        Time should be formatted like this: HH:MM am
        Date should be like this YYYY/MM/DD
        
        Return from this post: ${post}`
        }],
        model: "gpt-3.5-turbo",
        response_format: { "type": "json_object" }
    });


    console.log(JSON.stringify(completion))


    if (completion.choices[0].message.content) {
        let result = JSON.parse(completion.choices[0].message.content);
        return result
    } else {
        return null
    }

}