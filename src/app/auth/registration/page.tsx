'use client'
import BgCompanent from "@/components/authComps/bgcComps/BgCompanent";
import GoogleButton from "@/components/authComps/GoogleButton";
import RegistrationForm from "@/components/authComps/RegistrationForm";
import LoginForm from "@/components/forms/LoginForm";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
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
                <RegistrationForm />
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