
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { users, UserType } from "@/data/UsersData"
import type { NextAuthOptions, Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"



interface authModel {
  providers: any,
  pages: any,
  callbacks: any
}


 export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password
        )

        if (user) {
          return { id: user.username, email: user.username }
        }

        return null
      }
    })
  ],

  pages: {
    signIn: "/auth/login" 
  },

  
}