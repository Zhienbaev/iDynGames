'use client'
import GetBalance from "@/components/main/GetBalance";
import { Button, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { CreditCard } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";

export default function page() {
    return (
        <Stack width={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Stack width={'100%'} justifyContent={"center"} alignItems={"center"} sx={{marginBottom: '40px'}}>
                <Typography fontWeight={"bold"}>
                    Мой баланс
                </Typography>
                <SessionProvider>
                    <GetBalance/>
                </SessionProvider>
            </Stack>
            <Stack spacing={4} width={'30%'} >
                <Stack>
                    <Typography fontSize={'12.6px'}>
                        Сумма пополнение
                    </Typography>
                    <TextField variant="outlined"  type='number' sx={{bgcolor: '#F9F9F9', width:'100%'}}/>
                    <Typography fontSize={'11.4px'} color="#99A1B7">
                        минимальная сумма пополнение: $1
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Button variant="contained" sx={{backgroundColor: 'yellow' }}>
                        <Image src={'/svg/paypal.svg'} alt="paypal" width={80} height={20} />
                    </Button>
                    <Button variant='contained' sx={{backgroundColor: 'black'}}>
                        <CreditCard /> 
                        <Typography variant='caption' sx={{marginLeft: '3px'}} >
                            Дебетовая или кредитная карта
                        </Typography>
                    </Button>
                </Stack>

            </Stack>
        </Stack>
    )
}
