'use client'

import GetRefCode from "@/components/main/GetRefCode";
import { Alert, Stack, Typography } from "@mui/material";
import { Bell, Files, Link2, StepBack } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";



export default function page() {
      const [isCopied, setIsCopied] = useState(false)
      const handleCopy = () => {
        navigator.clipboard.writeText("Текст для копирования")
          .then(() => setIsCopied(true))
          .catch((err) => console.error("Ошибка копирования:", err))
        setTimeout(() => setIsCopied(false), 5000)
      }
    
    return (
        
                <Stack>
                  <Typography fontSize={'17.55px'} fontWeight={'bold'}>
                    Моя Реферальная Ссылка:
                  </Typography>
                  <Stack onClick={handleCopy} direction={'row'} gap={1} alignItems={"center"} sx={{ cursor: 'pointer' ,marginTop: '15px',marginBottom: '20px' }}>
                    <SessionProvider>
                      <GetRefCode />
                    </SessionProvider>
                    {isCopied && <Alert severity="success">Реферальная ссылка копировано в буфер обмена!</Alert>}
                  </Stack>
                  <Stack direction={'row'} spacing={2} sx={{bgcolor: '#E9F3ff', borderRadius: '16px', padding: "16px"}}>
                    <Bell />
                    <Stack>
                      <Link href={"/"} className="flex align-center text-center mb-[15px]">
                        <Typography sx={{marginRight: '5px'}}>
                          Реферальная программа
                        </Typography>
                        <Link2 />
                      </Link>
                      <Typography fontSize={12}>
                        Добро пожаловать в нашу Реферальную Программу!<br />
                        <br />
                        Зарабатывайте, рекомендуя наш сервис другим пользователям.<br />
                        <br />
                        Пользователь, зарегистрировавшийся по вашей ссылке, получит бонус $5 на свой баланс. Только первые 5 пользователей, зарегистрировавшихся по вашей ссылке, получат бонус в размере $5.
                        <br />
                        <br />
                        Как только пользователь зарегистрируется по вашей реферальной ссылке, вы будете получать 10% от всех его платежей в нашем сервисе пожизненно. Вы можете получить реферальную выплату в любое время, прямо на свой баланс, на свой счет Paypal или нашей криптовалютой IGC.
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
    )
}
