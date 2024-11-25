import React from 'react'
import { SignUp } from '@clerk/nextjs'

function Page() {
    return (
        <div className='flex justify-center items-center h-screen p-5'>
            <SignUp />
        </div>
    )
}

export default Page