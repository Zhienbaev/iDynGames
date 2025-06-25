'use client'
import GetBalance from "@/components/main/GetBalance";
import LangButtom from "@/components/main/LangButtom";
import ProfileButton from "@/components/main/ProfileButton";
import ThemeButton from "@/components/main/ThemeButton";
// import { authOptions } from "@/configs/authConfigs/NextAuth.Config";
// import { users } from "@/data/UsersData";
import { Button, Stack, Typography } from "@mui/material";
import { SessionProvider } from "next-auth/react";
// import { Session } from "inspector/promises";
// import { getServerSession } from "next-auth";
import Image from "next/image";



export default function Header() {

    // const session = await getServerSession(authOptions)
    // const currentUser = users.find(user => user.username === session?.user?.name)

    

    return (
        <Stack>
            <Stack direction={"row"} spacing={2} sx={{justifyContent: "end", padding:"10px 20px"}}>
                <Stack sx={{justifyContent:"center", alignItems:"center", cursor: "pointer"}}>
                    <Typography sx={{fontSize: '12px'}}>
                        Баланс
                    </Typography>
                    {/* <Typography sx={{
                        fontSize: "16.8px", 
                        fontWeight: "600", 
                        color: "#17C653", 
                        backgroundColor: "#DFFFEA", 
                        borderRadius: "2px", 
                        padding: "2px"
                        }}>
                        ${Number(currentUser?.Balance || "0").toFixed(2)}
                    </Typography> */}
                    <SessionProvider>
                        <GetBalance/>
                    </SessionProvider >
                </Stack >
                {/* theme */}
                
                <ThemeButton/>
                {/* lang */}
                <LangButtom/>
                {/* profille */}
                <ProfileButton/>
            </Stack>
        </Stack>
    )
}
