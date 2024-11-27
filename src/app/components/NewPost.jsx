'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function NewPost() {
    const router = useRouter()
    return (
        <button className='' onClick={() => router.push('/create-post')}>Create Post</button>
    )
}

export default NewPost