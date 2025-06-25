'use client'

import { useSession } from "next-auth/react"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"

export default function GetEmail() {
  const { data: session } = useSession()
//   const [username, setUsername] = useState<string | null>(null)

//   useEffect(() => {
//     async function fetchUser() {
//       const res = await fetch("/api/users")
//       const users = await res.json()
//       const user = users.find((u: any) => u.username === session?.user?.name)
//       if (user) {
//         setUsername(user.username)
//       }
//     }

//     if (session?.user?.name) {
//       fetchUser()
//     }
//   }, [session])

  return (
    <Typography sx={{ fontSize: "13.8px", fontWeight:"bold"  }}>
      {session?.user?.name}
    </Typography>
  )
}
