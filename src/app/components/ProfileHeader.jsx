'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../../public/uploads/1076674.webp'


const ProfileHeader = ({ user, clerkUserId2 }) => {
    const [isUser, setIsUser] = useState(false)


    useEffect(() => {
        if (user?.clerkUserId === clerkUserId2) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }, [])

    return (
        <div className="text-center flex flex-col gap-2 py-6 bg-[#200c22] items-center flex-grow-0">
            <Image
                className="rounded-full border-4 border-[#a086b2] w-36 h-36 mx-auto"
                src={user?.imageUrl || image}
                alt="Profile Picture"
                width={200}
                height={200}
            />
            <h1 className="text-[#a086b2] text-3xl mt-4">{user?.name}</h1>
            <p className="text-white text-lg mt-2">Hello, I am {user?.name}</p>
            {isUser && <Link className='p-2 bg-purple-500 rounded-lg' href={'/edit-profile'}>Edit Profile</Link>}
        </div>
    );
};

export default ProfileHeader;
