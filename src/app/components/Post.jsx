import React from 'react'
import Image from 'next/image'


function Post({ userName, URL, title, description, tags }) {

    const isValidURL = URL && URL.trim() !== "";
    return (
        <div key={userName} className='grid grid-rows-[auto,1fr] lg:grid-cols-[1fr,1fr] lg:grid-rows-none items-center bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden m-4 max-w-4xl'>
            {/* Header: Covering the entire top of the card */}
            <header className='col-span-full p-6 text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-xl'>
                {title}
            </header>

            {/* Image Section */}
            {isValidURL && (
                <div className='w-full lg:w-full flex justify-center p-4'>
                    <img src={URL} alt={`Image for ${title}`} className='rounded-lg shadow-md object-cover' />
                </div>
            )}

            {/* Content Section */}
            <div className='flex flex-col p-6 lg:w-full'>
                {/* User Name and Description */}
                <div className='mt-4'>
                    <p className='font-semibold text-white text-2xl'>{userName}</p>
                    <p className='text-gray-300 text-lg mt-2'>{description}</p>
                </div>

                {/* Content Container for Button and Tags */}
                <div className='flex flex-col items-center mt-6 space-y-4'>
                    {/* Read More Button */}
                    <p className='text-center p-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition-all w-48'>
                        Read more
                    </p>

                    {/* Tags */}
                    <ul className='flex flex-wrap justify-center gap-3'>
                        {tags.map((tag) => (
                            <li key={tag} className='bg-purple-600 text-white text-sm px-2 py-1 rounded-full'>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>





    )
}

export default Post