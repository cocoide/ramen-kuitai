import GoogleProvider from "next-auth/providers/google"
import prisma from '../client/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET} =process.env
export const authOptions={
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID || "",
            clientSecret: GOOGLE_CLIENT_SECRET||"",
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: NEXTAUTH_SECRET,
    
    callbacks: {
        async session({ token, session }) {
          if (token) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.image = token.picture
          }

          return session
        },
        async jwt({ token, user }) {
          const prismaUser = await prisma.user.findFirst({
            where: {
              email: token.email,
            },
          })
    
          if (!prismaUser) {
            token.id = user.id
            return token
          }
    
          return {
            id: prismaUser.id,
            name: prismaUser.name,
            email: prismaUser.email,
            picture: prismaUser.image,
          }
        },
    },
}