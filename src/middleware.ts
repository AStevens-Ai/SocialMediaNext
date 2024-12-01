import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
    console.log("Incoming Request:", req.url);
    const session = await auth.protect();

    if (!session) {
        console.error("No session found!");
    } else {
        console.log("Authenticated Clerk User:", session.userId);
    }
});
