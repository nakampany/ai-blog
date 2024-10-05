'use client'

import OpenAI from 'openai'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8">AI Blog Reviewer</h1>
            <Reviewer />
        </main>
    )
}

function Reviewer() {
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [body, setBody] = useState('')
    const [reviewComment, setReviewComment] = useState('')
    const [isReviewing, setIsReviewing] = useState(false)

    async function onReview() {
        setIsReviewing(true)
        setReviewComment('')
        let comment = ''
        try {
            comment = await review(title, tags, body)
        } catch (e) {
            setReviewComment('')
            window.alert('error')
            console.error('error', e)
            setIsReviewing(false)
            return
        }
        setReviewComment(comment)
        setIsReviewing(false)
    }

    return (
        <>
            <input
                type="text"
                name="title"
                placeholder="タイトル"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="block w-full border-0 p-2 mb-4"
            />
            <input
                type="text"
                name="tags"
                placeholder="タグ（カンマ区切りで5個まで）"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                className="block w-full border-0 p-2 mb-4"
            />
            <textarea
                name="body"
                placeholder="本文（Markdown記法）"
                rows={10}
                value={body}
                onChange={(event) => setBody(event.target.value)}
                className="block w-full border-0 p-2 mb-4"
            ></textarea>
            {isReviewing ? (
                <p className="float-right">
                    Reviewing... It takes a minute at most.
                </p>
            ) : (
                <button
                    type="button"
                    className="float-right rounded-md bg-indigo-600 mb-4 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onReview}
                >
                    Review By ChatGPT
                </button>
            )}
            <ReactMarkdown className="markdown clear-right">
                {reviewComment}
            </ReactMarkdown>
        </>
    )
}

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

async function review(
    title: string,
    tags: string,
    body: string
): Promise<string> {
    const prompt = `Please review the following blog post and use Japanese and Markdown for review results.
Please take special care to ensure that there are no inappropriate contents or expressions to be published as a corporate blog post.

Title: ${title}
Tags(comma separated): ${tags}
${body}`
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are a great IT blog writer.'
            },
            {
                role: 'user',
                content: prompt
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
