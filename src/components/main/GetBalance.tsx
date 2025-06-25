'use client'
import { Stack, Typography } from "@mui/material"
import { useSession } from "next-auth/react"

export default function GetBalance() {
    const { data: session } = useSession()
    return (
        <Typography sx={{
                        fontSize: "16.8px", 
                        fontWeight: "600", 
                        color: "#17C653", 
                        backgroundColor: "#DFFFEA", 
                        borderRadius: "2px", 
                        padding: "2px"
                        }}>
                        ${Number(session?.user?.image|| "0").toFixed(2)}
        </Typography>
    )
}
