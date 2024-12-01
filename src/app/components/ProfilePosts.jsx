import React, { useEffect, useState } from 'react';


const ProfilePosts = ({ post }) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(() => {
        const date = new Date(post.createdAt).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        setFormattedDate(date);
    }, [post.createdAt]);

    return (
        <div className="bg-[#392e45] p-6 rounded-lg shadow-lg">
            <img
                src={post.Image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl">{post.title}</h2>
            <p className='text-[#007aff]'>{formattedDate}</p>
            <p className="text-white mt-4 text-md">{post.content.slice(0, 400) + '...'}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-start">
                {post.tags.map((tag) => (
                    <span key={tag.id} className="whitespace-nowrap inline-block bg-[#007aff] text-white px-2 py-1 rounded-full text-sm mr-2">
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProfilePosts;
