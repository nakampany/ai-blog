'use client'

import * as BodyInput from '@/components/features/BodyInput'
import * as MarkdownOutput from '@/components/features/MarkdownOutput'
import * as ReviewActions from '@/components/features/ReviewActions'
import * as ReviewButton from '@/components/features/ReviewButton'
import type React from 'react'
import { useCheckMistakes } from './useCheckMistakes'

const Page: React.FC = () => {
    const {
        body,
        setBody,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    } = useCheckMistakes()

    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8 font-bold">
                リライト（短文）
            </h1>
            <p>
                以下のフォームにブログの
                タイトル、キーワード、本文を入力してください
            </p>

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
