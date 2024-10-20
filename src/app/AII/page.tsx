'use client'

import { TextField } from '@mui/material'
import type React from 'react'
import ReactMarkdown from 'react-markdown'
import { useAll } from './useAll'

const Page: React.FC = () => {
    return <All />
}

export default Page

const All = () => {
    const {
        keyWords,
        setKeyWords,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    } = useAll()

    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8">タイトル生成</h1>
            <p>以下のフォームにブログのキーワードを入力してください。</p>

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
                    生成中です... 最長でも1分ほどかかります。
                </p>
            ) : (
                <button
                    type="button"
                    className="float-right rounded-md bg-indigo-600 mb-4 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onReview}
                >
                    {hasReviewed ? '再提案' : '提案'}
                </button>
            )}
            <p className="text-gray-600 mt-2">
                文字数: {reviewComment.length} 文字
            </p>
            <ReactMarkdown className="markdown clear-right">
                {reviewComment}
            </ReactMarkdown>

            {reviewComment && (
                <div className="mt-4">
                    <button
                        type="button"
                        className="rounded-md bg-green-600 px-3 py-2 font-semibold text-white hover:bg-green-500 focus:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        onClick={copyToClipboard}
                    >
                        コピー
                    </button>
                    {copySuccess && (
                        <p className="text-green-600 mt-2">{copySuccess}</p>
                    )}

                    <button
                        type="button"
                        className="ml-4 rounded-md bg-red-600 px-3 py-2 font-semibold text-white hover:bg-red-500 focus:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        onClick={clearReviewHistory}
                    >
                        履歴を削除
                    </button>
                </div>
            )}
        </main>
    )
}
