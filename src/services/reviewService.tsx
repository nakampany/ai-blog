import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export async function reviewBlogPost(
    title: string,
    tags: string,
    body: string,
    prompt: string
) {
    const blogPrompt = `
  ${prompt}

  Title: ${title}
  Tags(comma separated): ${tags}
  ${body}
  `

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are a great IT blog writer.'
            },
            {
                role: 'user',
                content: blogPrompt
            }
        ],
        model: 'gpt-4o-mini'
    })

    if (
        completion.choices.length === 0 ||
        !completion.choices[0].message.content
    ) {
        throw new Error('no response from chatgpt')
    }

    return completion.choices[0].message.content
}
