'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function CreatePostForm() {
    const [tags, setTags] = useState([])
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [tagField, setTagField] = useState("")
    const router = useRouter()


    const submitForm = async (event) => {
        event.preventDefault();


        if (tags.length === 0 || content.trim() === "" || title.trim() === "") {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const formData = {
                title,
                content,
                image,
                tags
            };
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('post created', data);
                setTitle('');
                setContent('');
                setImage('');
                setTags([]);
                router.push('/');
            } else {
                console.error('Failed to create post', data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <form className='flex gap-4 flex-col p-6 bg-[#1E1E1E] rounded-lg shadow-lg createPostForm w-screen lg:max-w-screen-sm'>
            <section className='flex flex-col p-2 gap-2'>
                <label>Title</label>
                <input value={title} onChange={(event) => {
                    setTitle(event.target.value)
                }} type='text' placeholder='Add title' className='p-2 rounded-lg bg-gray-100 text-black' />
            </section>
            <section className='flex flex-col p-2 gap-2'>
                <label>Content</label>
                <textarea value={content} onChange={(event) => {
                    setContent(event.target.value)
                }} rows={4} cols={50} placeholder='Enter your content here' className="bg-gray-100 rounded-lg p-2 text-black" />
            </section>
            <section className='flex flex-col p-2 gap-2 '>
                <label className=''>Tags</label>
                <input type='text' placeholder='Add Tag' value={tagField} onChange={(event) => {
                    setTagField(event.target.value)
                }} className='rounded-lg text-black p-2 bg-gray-100 '></input>
                <section className='flex flex-row'>
                    <ul className='gap-2 flex min-w-40 flex-wrap'>
                        {tags.map((tag) => (

                            <li className='bg-green-900 text-white text-sm px-2 py-2 rounded-full flex gap-2' key={tag}>{tag} <button className='text-red-500' type='button' onClick={() => {
                                setTags((prevTags) => {
                                    const filtered = prevTags.filter(t => t !== tag)
                                    return filtered
                                })
                            }}>X</button></li>

                        ))}</ul>
                    <button type='button' onClick={() => {
                        setTags((prev) => {
                            if (prev.includes(tagField)) {
                                alert("Tag already exists")
                                setTagField('')
                                return prev
                            } else {
                                if (tagField.trim() !== "") {
                                    let newFields = [...prev, tagField]
                                    setTagField("")
                                    return newFields
                                }
                                return
                            }

                        })
                    }} disabled={!tagField} className={` ml-auto p-1 rounded-lg flex-grow-0 flex-shrink-0 self-start ${!tagField ? "bg-gray-500" : "bg-purple-500 hover:bg-[#a086b2]"} `}>Add Tag</button>
                </section>
            </section>
            <section className='flex p-2 gap-4 flex-col lg:flex-row lg:justify-between'>
                <section className='flex-col flex gap-2'>
                    <label className=''>Post image</label>
                    <input type='file' accept="image/*" onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                            const reader = new FileReader()
                            reader.onload = () => {
                                setImage(reader.result)
                            }
                            reader.readAsDataURL(file);
                        }
                    }} className='rounded-lg' />
                </section>
                <section className='flex items-end'>
                    <button disabled={!title || !content || tags.length === 0} onClick={submitForm} type='button' className={` ml-auto mr-auto p-3 rounded-lg ${!title || !content || !tags ? "bg-gray-500" : "bg-purple-500 hover:bg-[#a086b2]"}`}>Create Post</button>
                </section>
            </section>

        </form >
    )
}

export default CreatePostForm