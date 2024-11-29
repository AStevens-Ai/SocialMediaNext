'use client'

import React, { useState, useEffect } from 'react'
import { editInformation } from '../actions.js'
import { useActionState } from 'react'




function EditProfileForm({ user }) {
    const [name, setName] = useState('')
    const [error, action, isPending] = useActionState(editInformation, null)


    useEffect(() => {
        setName(user.name)
    }, [])




    return (
        <form action={action} className='flex gap-2 flex-col ml-auto mr-auto'>
            <label>Name</label>
            <input name="name" type='text' value={name} onChange={(event) => {
                setName(event.target.value)
            }} required className='rounded-lg p-2 w-72 text-black' placeholder='enter name' />
            <button disabled={isPending} className={`p-2 bg-purple-500 rounded-lg ml-auto mr-auto ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500'}`}>Update</button>
            {isPending && (
                <p>Loading...</p>
            )}
            {error && (
                <div className="mt-2 text-center text-green-500">{error}</div>
            )}

        </form >

    )
}

export default EditProfileForm