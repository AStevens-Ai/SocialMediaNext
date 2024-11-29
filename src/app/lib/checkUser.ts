import { currentUser } from "@clerk/nextjs/server";
import { db } from './db';


export const checkUser = async () => {
    try {
        const user = await currentUser();

        if (!user) {
            return null
        }

        // Check if the user already exists in the database
        const loggedInUser = await db.user.findUnique({
            where: { clerkUserId: user.id },
        });

        const checkUsername = await db.user.findUnique({
            where: { clerkUserId: user.id },
        })

        if (checkUsername) {
            if (checkUsername.name === 'null' || checkUsername.name === null) {
                return { needsUsername: true }
            }
        }

        if (loggedInUser) {
            return loggedInUser;
        }

        // Create a new user if not found in the database
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                password: null
            },
        });


        return newUser;

    } catch (error) {
        console.error("Error interacting with the database:", error);
        return { error: "Failed to fetch or create user." };
    }
};
