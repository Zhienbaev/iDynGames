import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "users.json")
  const data = fs.readFileSync(filePath, "utf-8")
  const users = JSON.parse(data)
  return NextResponse.json(users)
}
