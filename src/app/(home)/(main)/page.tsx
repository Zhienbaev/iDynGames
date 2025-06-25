'use client'
import Image from "next/image";
import { SessionProvider } from "next-auth/react"
import { Alert, Button, Stack, Typography } from "@mui/material";
import { ST } from "next/dist/shared/lib/utils";
import { Bell, CircleQuestionMark, Files, Link2 } from "lucide-react";
import GetRefCode from "@/components/main/GetRefCode";
import { useState } from "react";
import Link from "next/link"



export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("Текст для копирования")
      .then(() => setIsCopied(true))
      .catch((err) => console.error("Ошибка копирования:", err))
    setTimeout(() => setIsCopied(false), 5000)
  }

  return (
    <Stack>
      <Stack>
        <Stack direction={'row'} gap={2} alignItems={'center'} sx={{marginBottom: '45px'}}>
          <Stack direction={'row'} gap={0.5} >
            <Typography fontSize={'17.55px'} fontWeight={'bold'}>
              Мои проекты
            </Typography>
            <CircleQuestionMark color="blue" />
          </Stack>
          <Button variant="contained" sx={
            {
              width: '143px',
              height: '40px',
              bgcolor: '#17C653',
              color: 'white',
              '&:hover': {
                bgcolor: '#009e42'
              },
              fontSize: '10.3px',
              fontWeight: 'bold'
            }
          }>
            Создать проекты
          </Button>
        </Stack>
        <Stack>
          <Typography fontSize={'17.55px'} fontWeight={'bold'}>
            Моя Реферальная Ссылка:
          </Typography>
          <Stack onClick={handleCopy} direction={'row'} gap={1} alignItems={"center"} sx={{ cursor: 'pointer' ,marginTop: '15px',marginBottom: '20px' }}>
            <SessionProvider>
              <GetRefCode />
            </SessionProvider>
            <Files />
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
      </Stack>
    </Stack>

  );
}
