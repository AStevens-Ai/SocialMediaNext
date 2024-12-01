import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Exclude /sign-up and /sign-in from protection
const isPublicRoute = createRouteMatcher(['/sign-up(.*)', '/sign-in(.*)'])
export default clerkMiddleware(async (auth, req) => {
    // Protect all routes except the public routes
    if (!isPublicRoute(req)) {
        await auth.protect();
    }
});

// Configure the middleware to apply to relevant routes
export const config = {
    matcher: [
        '/',                      // Home route
        '/profile/(.*)',         // Match dynamic routes like /profile/[userID]
        '/sign-up(.*)',            // Match /sign-up and any sub-routes under it
        '/sign-in(.*)',            // Match /sign-in and any sub-routes under it
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',         // Always run for API routes
    ],
};
