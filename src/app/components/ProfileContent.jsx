import React from 'react';
import ProfilePosts from './ProfilePosts';

const ProfileContent = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {posts.map((post) => (
                <div key={post.id}>
                    <ProfilePosts post={post} />
                </div>
            ))}
        </div>
    );
};

export default ProfileContent;