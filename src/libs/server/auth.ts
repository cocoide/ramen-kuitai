import GoogleProvider from "next-auth/providers/google"
import prisma from '../client/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||"",
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
}