import { Button, Stack, TextField, Typography } from "@mui/material"
import Link from "next/link"
import GoogleButton from "./GoogleButton";
import LoginForm from "../forms/LoginForm";
import RegForm from "../forms/RegForm";


export default function ForgotPassword() {
    
    return ( <div className="h-1/2 w-100 flex flex-col items-center">
        <h1 className=" text-2xl font-bold mb-3">Зарегистрироваться</h1>
        <div className="text-gray-400 fw-semibold fs-5 mb-[35px]">Через социальные сети</div>
        <GoogleButton />
        <div className="flex justify-center items-center gap-2 w-100 text-gray-400 fs-5 [35px]">
            <span className="flex w-1/3 h-[1px] bg-gray-100 "/>
            или по email
            <span className="flex w-1/3 h-[1px] bg-gray-100"/>
        </div>
        <RegForm/>
        <Stack sx={{marginTop: 2}}>
            <Typography sx={{color: "gray"}}>
                Уже есть аккаунт?
                <Link href={"/auth/login"} className="text-blue-500 hover:text-blue-200 transition duration:300"> Войти</Link>
            </Typography>
            
        </Stack>
    </div>)
}
