// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { users, UserType } from "@/data/UsersData"
import type { NextAuthOptions, Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import fs from 'fs'
import path from 'path'

function getUsersFromFile() {
  const filePath = path.join(process.cwd(), 'data', 'users.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(jsonData)
}

function generateRandomCode(length = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    result += chars[randomIndex]
  }
  return result
}

export const authOptions = {
  providers: [
    // ✅ Google вход
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

    // ✅ Локальный вход по username и password
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
    signIn: "/auth/login" // твоя страница входа
  },

  callbacks: {
    async signIn({ user }: { user: User }) {
      const users = getUsersFromFile()
      const exists = users.find((u: UserType) => u.username === user.email)

      if (!exists && user.email) {
        const code = generateRandomCode()
        users.push({
          username: user.email,
          Balance: 0,
          refCode: `${code}`
        })

        // Перезаписываем файл
        fs.writeFileSync(
          path.join(process.cwd(), 'data', 'users.json'),
          JSON.stringify(users, null, 2)
        )


        console.log("🆕 Добавлен пользователь через Google:", user.email)
      }

      return true
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {

      if (user) {
        token.sub = user.email ?? '' // или user.id
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.sub) {
        session.user.name = token.sub
      }
      const users = getUsersFromFile()
      const exists = users.find((u: UserType) => u.username === session.user?.name)


      if (session.user && exists) {
        session.user.email = exists.refCode // или другое поле
        session.user.image = exists.Balance
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
