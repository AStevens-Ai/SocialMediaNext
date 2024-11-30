import React from 'react'
import { fetchUserByClerkId } from '../lib/fetchUser'
import EditProfileForm from '../components/EditProfileForm'
import BackButton from '../components/BackButton'
import { auth } from '@clerk/nextjs/server'

async function page() {
    const { userId } = await auth()

    const user = await fetchUserByClerkId({ clerkId: userId })
    return (
        <div>
            <BackButton />
            <div className='flex items-center justify-center h-screen flex-col'>
                <h1 className='w-72 text-lg text-purple-400 bg-transparent ml-auto mr-auto'>Currently i only support name changing  </h1>
                <EditProfileForm user={user} />
            </div >
        </div>
    )
}

export default page