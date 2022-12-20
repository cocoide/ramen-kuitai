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
    secret: process.env.NEXT_PUBLIC_SECRET,
    
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