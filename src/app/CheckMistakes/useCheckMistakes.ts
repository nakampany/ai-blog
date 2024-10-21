import { useEffect, useState } from 'react'
import { reviewBlogPost } from '../../services/reviewService'
import { prompt } from './prompts'

export const useCheckMistakes = () => {
    const [body, setBody] = useState('')
    const [reviewComment, setReviewComment] = useState('')
    const [isReviewing, setIsReviewing] = useState(false)
    const [copySuccess, setCopySuccess] = useState('')
    const [hasReviewed, setHasReviewed] = useState(false)

    useEffect(() => {
        const storedComment = localStorage.getItem('reviewComment')
        if (storedComment) {
            setReviewComment(storedComment)
            setHasReviewed(true)
        }
    }, [])

    const onReview = async () => {
        setIsReviewing(true)
        setReviewComment('')
        let comment = ''
        try {
            comment = await reviewBlogPost('', '', body, prompt)
        } catch (e) {
            setReviewComment('')
            window.alert('error')
            console.error('error', e)
            setIsReviewing(false)
            return
        }
        setReviewComment(comment)
        setIsReviewing(false)
        setHasReviewed(true)

        localStorage.setItem('reviewComment', comment)
    }

    const copyToClipboard = async () => {
        if (reviewComment) {
            try {
                await navigator.clipboard.writeText(reviewComment)
                setCopySuccess('コピーしました！')
            } catch (err) {
                console.error('Failed to copy text:', err)
                setCopySuccess('コピーに失敗しました')
            }
        }
    }

    const clearReviewHistory = () => {
        localStorage.removeItem('reviewComment')
        setReviewComment('')
        setHasReviewed(false)
    }

    return {
        body,
        setBody,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    }
}
