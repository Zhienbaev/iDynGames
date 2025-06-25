import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";



export default function GetRefCode() {
    const { data: session } = useSession()
    return (
        <Typography fontSize={'17x'} color="#1B84FF" fontWeight={'bold'}>

            https://idosgames.com/?r={session?.user?.email}
        </Typography>
    )
}
