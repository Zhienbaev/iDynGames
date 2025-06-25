'use client'

import { TextField, Typography, Button, Stack, Alert } from "@mui/material"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { status } = useSession()
  const [isWrong, setIsWrong] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/")
    }
  }, [status, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password
    })

    if (res?.ok) {
      router.replace("/")
    } else {
      setIsWrong(true)
      setTimeout(() => setIsWrong(false), 5000)
    }}

    return (
      <form onSubmit={handleLogin} className="w-100">
        <Stack spacing={2}>
          <Stack>
            <Typography className="mb-5">Email</Typography>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="login-email"
              variant="outlined"
              label='Введите Email'
              required
              type="email"
              fullWidth
            />
          </Stack>

          <Stack>
            <Typography>Пароль</Typography>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="login-password"
              variant="outlined"
              label='Введите Пароль'
              type="password"
              required
              fullWidth
            />
          </Stack>

          <Link href="/auth/forgot-password" style={{ textAlign: "right", fontSize: 14 }}>
            Забыли пароль?
          </Link>
          {isWrong && (
            <Alert severity="error">
              Неправильный логин или пароль!
            </Alert>
          )}
          <Button type="submit" variant="contained" fullWidth>
            Продолжить
          </Button>
        </Stack>
      </form>
    )
  }
