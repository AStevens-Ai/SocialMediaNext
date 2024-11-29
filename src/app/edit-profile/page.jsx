import React from 'react'
import { fetchUser } from '../lib/fetchUser'
import EditProfileForm from '../components/EditProfileForm'
import BackButton from '../components/BackButton'

async function page() {
    const user = await fetchUser()
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