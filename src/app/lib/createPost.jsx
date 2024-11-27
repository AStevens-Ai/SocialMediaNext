import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const createPost = async ({ title, content, imageUrl, tags }) => {
    try {
        const user = await currentUser();

        if (!user) {
            console.error('No user found');
            return null;
        }

        const dbUser = await db.user.findUnique({
            where: { clerkUserId: user.id },
        })

        if (!dbUser) {
            console.error('User not found in the database');
            return null;
        }

        let tagsData = [];

        if (tags && tags.length > 0) {
            tagsData = tags.map(tag => ({
                where: { name: tag },
                create: { name: tag },
            }));
        }


        const postData = {
            title,
            content,
            userId: dbUser.id,
            tags: tagsData.length > 0 ? { connectOrCreate: tagsData } : [],
            Image: imageUrl
        };


        const createdPost = await db.post.create({
            data: postData,
        });


        return createdPost;

    } catch (err) {
        console.error('Error creating post:', err);
        throw err;
    }
};
