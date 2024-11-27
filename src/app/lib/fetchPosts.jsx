import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

const fetchPosts = async () => {
    try {
        const user = await currentUser();
        if (!user) {
            return [];  // Returning an empty array instead of null to avoid breaking the frontend
        }

        const posts = await db.post.findMany({
            include: {
                tags: true, // Replace "tags" with the name of your relation field in the schema
            },
        });  // Query the posts from your database
        return posts;  // Return the posts to get passed to the Feed component
    } catch (err) {
        console.error('Error in fetchPosts:', err);  // Logging error details
        return [];  // Return an empty array in case of error to prevent breaking the frontend
    }
};

export default fetchPosts;
