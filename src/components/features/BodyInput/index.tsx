import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    body: string
    setBody: (value: string) => void
}

export const Component = (props: Props) => {
    const { body, setBody } = props

    return (
        <TextField
            name="body"
            placeholder="本文（Markdown記法）"
            rows={10}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="block w-full border-0 p-2 mb-4"
            multiline
            fullWidth
        />
    )
}
