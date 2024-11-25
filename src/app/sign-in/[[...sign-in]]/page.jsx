import { SignIn } from '@clerk/nextjs'
import React from 'react'

function Page() {
    return (
        <div className='items-center justify-center p-5 flex h-screen'>
            <SignIn />
        </div>
    )
}

export default Page