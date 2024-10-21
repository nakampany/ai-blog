'use client'

import * as BodyInput from '@/components/features/BodyInput'
import * as KeywordInput from '@/components/features/KeywordInput'
import * as MarkdownOutput from '@/components/features/MarkdownOutput'
import * as ReviewActions from '@/components/features/ReviewActions'
import * as ReviewButton from '@/components/features/ReviewButton'
import * as TitleInput from '@/components/features/TitleInput'
import type React from 'react'
import { useRewriteLong } from './useRewriteLong'

const Page: React.FC = () => {
    const {
        title,
        setTitle,
        keyWords,
        setKeyWords,
        body,
        setBody,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    } = useRewriteLong()

    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8 font-bold">
                リライト（長文）
            </h1>
            <p>
                以下のフォームにブログの
                タイトル、キーワード、本文を入力してください
            </p>

            <TitleInput.Component title={title} setTitle={setTitle} />

            <KeywordInput.Component
                keyWords={keyWords}
                setKeyWords={setKeyWords}
            />

            <BodyInput.Component body={body} setBody={setBody} />

            <ReviewButton.Component
                isReviewing={isReviewing}
                hasReviewed={hasReviewed}
                onReview={onReview}
            />

            <p className="text-gray-600 mt-2">
                文字数: {reviewComment.length} 文字
            </p>

            <MarkdownOutput.Component reviewComment={reviewComment} />

            {reviewComment && (
                <ReviewActions.Component
                    copyToClipboard={copyToClipboard}
                    copySuccess={copySuccess}
                    clearReviewHistory={clearReviewHistory}
                />
            )}
        </main>
    )
}

export default Page
