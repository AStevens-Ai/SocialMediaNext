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

export const config = {
    matcher: [
        '/',                      // Home route
        '/sign-up(.*)',            // Match /sign-up and any sub-routes under it
        '/sign-in(.*)',            // Match /sign-in and any sub-routes under it
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',         // Always run for API routes
    ],
};
