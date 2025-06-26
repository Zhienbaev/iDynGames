// middleware.ts
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  console.log("TOKEN IN MIDDLEWARE:", token)

  const isAuth = !!token
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")

  if (!isAuth && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
}
