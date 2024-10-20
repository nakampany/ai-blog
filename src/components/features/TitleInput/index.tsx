import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    title: string
    setTitle: (value: string) => void
}

export const Component = (props: Props) => {
    const { title, setTitle } = props

    return (
        <TextField
            type="text"
            name="title"
            placeholder="タイトル"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="block w-full border-0 p-2 mb-4"
            fullWidth
        />
    )
}
