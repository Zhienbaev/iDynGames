'use client'

import BgCompanent from "@/components/authComps/bgcComps/BgCompanent";
import Login from "@/components/authComps/Login";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Page() {

    return (

        <Stack direction={"row"} sx={{height: '100vh', maxHeight: '100vh', justifyContent: 'center',
                alignItems: 'center',
                alignContent:"center"}}>
            <Stack 
            sx={{
                width: 1/2,
                maxHeight: '100vh',
                background: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent:"center"
            }}
            >
                <Login />
            </Stack>
            <Stack  
            sx={{
                minHeight: "100vh",
                Height: '100vh',
                width: 1/2,
                background: "url('/auth/auth-bg.png')",
                backgroundSize: 'cover',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <BgCompanent />
            </Stack>
        </Stack>
    )
}