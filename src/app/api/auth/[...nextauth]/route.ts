// app/api/auth/[...nextauth]/route.ts

import { authOptions } from "@/lib/authOptions"
import { users, UserType } from "@/data/UsersData"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt"
import fs from 'fs'
import path from 'path'
import type { NextAuthOptions, Session, User } from "next-auth"
import NextAuth from "next-auth"


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

authOptions.callbacks = {
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

        fs.writeFileSync(
          path.join(process.cwd(), 'data', 'users.json'),
          JSON.stringify(users, null, 2)
        )


        console.log(" Добавлен :", user.email)
      }

      return true
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {

      if (user) {
        token.sub = user.email ?? ''
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
        session.user.email = exists.refCode
        session.user.image = exists.Balance
      }
      return session
    }
  }

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
