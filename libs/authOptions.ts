import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module 'next-auth'{
  interface Session{
    user:User & {
      isAdmin:Boolean
    }
  }
}

declare module 'next-auth/jwt'{
  interface JWT{
    isAdmin:Boolean
  }
}

export const authOptions: NextAuthOptions = {
  adapter:PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
      },

      async authorize(credentials,req) {

    
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Enter the credentials");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (credentials.password !== user?.password) {
            return null
        }
        return user
      },
    }),
  ],

  callbacks:{
   async session({token,session}){
    if(token)
    {
      session.user.isAdmin= token.isAdmin
    }
    return session
   },

   async jwt({token}){

    const userInDb = await db.user.findUnique({
      where:{
        email:token.email!
      },
    })

    token.isAdmin = userInDb?.isAdmin!
    return token
   }


  },

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
