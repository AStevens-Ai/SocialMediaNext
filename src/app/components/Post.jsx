import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Post({ iD, userImage, userName, URL, title, description, tags, createdAt }) {

    const isValidURL = URL && URL.trim() !== "";
    return (
        <div key={userName} className='grid grid-rows-[auto,1fr] lg:grid-cols-[1fr,1fr] lg:grid-rows-none items-center bg-[#1E1E1E] rounded shadow-lg overflow-hidden m-4 max-w-4xl'>
            <div className='flex-col text-lg flex col-span-full p-6 text-center font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-xl'>
                {title}
                <span className='text-blue-400 text-center align text-sm'>{new Date(createdAt).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: 'true',

                })}</span>
            </div>


            {/* Image Section */}
            {isValidURL && (
                <div className='w-full lg:w-full flex justify-center p-4'>
                    <Image width={600} height={700} src={URL} alt={`Image for ${title}`} className='rounded-lg shadow-md  border-2 border-[#a086b2]' />
                </div>
            )}

            {/* Content Section */}
            <div className='flex flex-col p-6 lg:w-full'>
                {/* User Name and Description */}
                <div className='mt-2'>
                    {userImage && (<Image alt='user profile image' className='rounded-full border-4 mb-2 border-[#a086b2]  ml-0' src={userImage} height={100} width={100} />)}
                    <Link href={`/profile/${iD}`} className='font-semibold text-white hover:text-[#a086b2] text-1xl'>{userName}</Link>
                    <p className='text-gray-300 text-md mt-2'>{description.slice(0, 100) + '...'} <button className='text-purple-300 text-sm'>
                        Read more
                    </button></p>

                </div>

                {/* Content Container for Button and Tags */}
                <div className='flex flex-col items-center mt-6 space-y-4'>
                    {/* Tags */}
                    <ul className='flex flex-wrap justify-center gap-3'>
                        {tags?.map((tag) => (
                            <li key={tag.id} className='bg-blue-400 text-white text-sm px-2 py-1 rounded-full'>
                                {tag.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>





    )
}

export default Post