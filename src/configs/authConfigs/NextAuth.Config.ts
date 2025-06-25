import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { users, UserType } from "@/data/UsersData"
import fs from 'fs'
import path from 'path'

function getUsersFromFile() {
  const filePath = path.join(process.cwd(), 'data', 'users.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(jsonData)
}

function generateRandomCode(length = 5): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    result += chars[randomIndex]
  }
  return result
}

export const authOptions: NextAuthOptions = {


  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/auth/login" // твоя кастомная страница входа
  },
  callbacks: {
    async signIn({ user }) {
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
    async redirect({ url, baseUrl }) {
      // ✅ Перенаправление после входа
      return baseUrl // на главную страницу
    },
    async session({ session, token, user }) {
      // ✅ Добавим email в session.user
      if (session?.user) {
        session.user.email = token.email
      }
      return session
    },
    async jwt({ token, account, profile }) {
      // Сохраняем email в токене
      if (account && profile?.email) {
        token.email = profile.email
      }


      return token
    }
  }
}
