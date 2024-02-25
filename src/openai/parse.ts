import OpenAI from "openai";
const openai = new OpenAI({apiKey: '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'});


type EventInfo = {
    date: string
    time: string
    location: string
}

export default async function parsePost(post: string): Promise<EventInfo | null> {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: "user", content: `Please extract time and date, and location information, as JSON. 
        
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