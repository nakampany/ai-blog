'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { reviewBlogPost } from '../../services/reviewService'
import React from 'react'
import { TextField } from '@mui/material'

export const Outline = () => {
    const [title, setTitle] = useState('')
    const [keyWords, setKeyWords] = useState('')
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
            comment = await reviewBlogPost(title, keyWords, '', prompt)
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
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8">アウトライン生成</h1>
            <p>
                以下のフォームにブログのタイトルとキーワードを入力してください。
            </p>

            <TextField
                type="text"
                name="title"
                placeholder="タイトル"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="block w-full border-0 p-2 mb-4"
                fullWidth
            />
            <TextField
                type="text"
                name="keyWords"
                placeholder="キーワード（カンマ区切りで5個まで）"
                value={keyWords}
                onChange={(event) => setKeyWords(event.target.value)}
                className="block w-full border-0 p-2 mb-4"
                fullWidth
            />
            {isReviewing ? (
                <p className="float-right">
                    レビュー中です... 最長でも1分ほどかかります。
                </p>
            ) : (
                <button
                    type="button"
                    className="float-right rounded-md bg-indigo-600 mb-4 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onReview}
                >
                    提案
                </button>
            )}
            <ReactMarkdown className="markdown clear-right">
                {reviewComment}
            </ReactMarkdown>
        </main>
    )
}
