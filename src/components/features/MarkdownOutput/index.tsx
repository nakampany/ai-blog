import React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
    reviewComment: string
}

export const Component = (props: Props) => {
    const { reviewComment } = props
    return (
        <ReactMarkdown className="markdown clear-right">
            {reviewComment}
        </ReactMarkdown>
    )
}
