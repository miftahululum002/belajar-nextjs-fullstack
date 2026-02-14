// prisma.ts
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client";

// TypeScript global type
declare global {
    var prisma: PrismaClient | undefined;
}

// initialize prisma adapter
const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string);

// Use singleton pattern for Next.js dev
export const prisma =
    global.prisma ||
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
