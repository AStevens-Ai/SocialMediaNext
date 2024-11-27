import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (globalThis.prisma) {
        prisma = globalThis.prisma;
    } else {
        prisma = new PrismaClient();
        globalThis.prisma = prisma;
    }
}

prisma.$connect()
    .then(() => {
        console.log('Prisma Client connected successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to Prisma Client:', err);
    });

export const db = prisma;
