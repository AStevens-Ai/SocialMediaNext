import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const createPost = async ({ title, content, imageUrl, tags }) => {
    try {
        // Step 1: Get the current user
        const user = await currentUser();

        if (!user) {
            console.error('No user found');
            return null;
        }

        const dbUser = await db.user.findUnique({
            where: { clerkUserId: user.id },  // Match the current user with clerkId
        });

        if (!dbUser) {
            console.error('User not found in the database');
            return null;
        }


        // Step 4: If tags are provided, connect or create the tags, else set to empty array
        let tagsData = [];

        if (tags && tags.length > 0) {
            tagsData = tags.map(tag => ({
                where: { name: tag },  // Fix the syntax for "where"
                create: { name: tag },  // Fix the syntax for "create"
            }));
        }


        // Step 5: Prepare post data with the user ID (from dbUser) and tags data
        const postData = {
            title,
            content,
            userId: dbUser.id,  // Use the found user's id here
            tags: tagsData.length > 0 ? { connectOrCreate: tagsData } : [],  // Pass empty array if no tags
            Image: imageUrl
        };


        // Step 6: Create the post and connect it to the user and any tags
        const createdPost = await db.post.create({
            data: postData,
        });


        return createdPost;

    } catch (err) {
        console.error('Error creating post:', err);  // Log full error
        throw err;  // rethrow the error to handle it in route handler
    }
};
