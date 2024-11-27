import { currentUser } from "@clerk/nextjs/server";
import { db } from './db';


export const checkUser = async () => {
    try {
        // Fetch the current user from Clerk's server-side API
        const user = await currentUser();

        if (!user) {
            return null
        }

        // Check if the user already exists in the database
        const loggedInUser = await db.user.findUnique({
            where: { clerkUserId: user.id },
        });

        if (loggedInUser) {
            return loggedInUser; // If user exists, return them
        }

        // Create a new user if not found in the database
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        return newUser; // Return the newly created user

    } catch (error) {
        // Log the error and return null or an error message
        console.error("Error interacting with the database:", error);
        return { error: "Failed to fetch or create user." }; // Return a generic error message
    }
};
