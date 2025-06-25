'use client'
import GoogleButton from "@/components/authComps/GoogleButton";
import LoginForm from "@/components/forms/LoginForm";
import { Stack, Typography } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => { console.log("window", window.location.href); }, [])

    return (<div className="h-1/2 w-100 flex flex-col items-center">
        <h1 className=" text-2xl font-bold mb-3">Войти</h1>
        <div className="text-gray-400 fw-semibold fs-5 mb-[35px]">Через социальные сети</div>
        <GoogleButton />
        <div className="flex justify-center items-center gap-2 w-100 text-gray-400 fs-5 [35px]">
            <span className="flex w-1/3 h-[1px] bg-gray-100 " />
            или по email
            <span className="flex w-1/3 h-[1px] bg-gray-100" />
        </div>
        <SessionProvider>
            <LoginForm />
        </SessionProvider>
        <Stack sx={{ marginTop: 2 }}>
            <Typography sx={{ color: "gray" }}>
                Вы еще не зарегистрированы?
                <Link href={"/auth/registration"} className="text-blue-500 hover:text-blue-200 transition duration:300"> Зарегистрироваться</Link>
            </Typography>

        </Stack>
    </div>)

}
