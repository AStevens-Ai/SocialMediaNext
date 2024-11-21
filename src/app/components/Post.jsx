import React from 'react'
import Image from 'next/image'


function Post({ userName, URL, title, description, tags }) {

    const isValidURL = URL && URL.trim() !== "";
    return (
        <div key={userName} className='flex flex-col items-center bg-black rounded-lg shadow overflow-hidden m-4 max-w-96 min-h-50 primaryBorder'>
            <header className='w-full p-4 primary align-middle font-bold text-lg titleText'>{title}</header>
            <div className='p-4 text-center'>
                <p className='font-bold m-2'><strong>{userName}</strong></p>

                <p className='m-2'>{description}</p>
            </div>
            {isValidURL &&
                <img src={URL} alt={`Image for ${title}`} width={500} height={500} />
            }

            <p className='ml-auto mr-auto p-2 primary mb-2 rounded-xl mt-3 backgroundColor'>Read more</p>

            <ul className='flex flex-wrap justify-center mb-3 gap-4 textPrimary'>
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Post