import React from 'react';

const ProfileHeader = ({ user }) => {
    return (
        <div className="text-center py-8 bg-[#200c22]">
            <img
                className="rounded-full border-4 border-[#a086b2] w-36 h-36 mx-auto"
                src={user.imageUrl}
                alt="Profile Picture"
            />
            <h1 className="text-[#a086b2] text-3xl mt-4">{user.name}</h1>
            <p className="text-white text-lg mt-2">Hello, I am {user.name}</p>
        </div>
    );
};

export default ProfileHeader;
