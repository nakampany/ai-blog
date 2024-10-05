'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { reviewBlogPost } from '../services/reviewService'
import React from 'react'
import { Header } from '@/components/layouts/Header'
import { SideBar } from '@/components/layouts/SideBar'

export default function Home() {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Header onClick={toggleDrawer(true)} />
            <SideBar open={open} onClose={toggleDrawer(false)} />
            <main className="min-h-screen p-12">
                <h1 className="text-center text-2xl mb-8">AI Blog Reviewer</h1>
                <Reviewer />
            </main>
        </div>
    )
}

function Reviewer() {
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [body, setBody] = useState('')
    const [reviewComment, setReviewComment] = useState('')
    const [isReviewing, setIsReviewing] = useState(false)

    const prompt = `
  You are a great IT blog writer.
  Please review the blog post below and provide feedback
  `

    async function onReview() {
        setIsReviewing(true)
        setReviewComment('')
        let comment = ''
        try {
            comment = await reviewBlogPost(title, tags, body, prompt)
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
