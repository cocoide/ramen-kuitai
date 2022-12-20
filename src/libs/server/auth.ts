import GoogleProvider from "next-auth/providers/google"
import prisma from '../client/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "502700156715-i34ihric09g0futb1dcrhfckilv0b3md.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||"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",
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    
    // callbacks: {
    //     async session({ token, session }) {
    //       if (token) {
    //         session.user.id = token.id
    //         session.user.name = token.name
    //         session.user.email = token.email
    //         session.user.image = token.picture
    //       }

    //       return session
    //     },
    //     async jwt({ token, user }) {
    //       const prismaUser = await prisma.user.findFirst({
    //         where: {
    //           email: token.email,
    //         },
    //       })
    
    //       if (!prismaUser) {
    //         token.id = user.id
    //         return token
    //       }
    
    //       return {
    //         id: prismaUser.id,
    //         name: prismaUser.name,
    //         email: prismaUser.email,
    //         picture: prismaUser.image,
    //       }
    //     },
    // },
}