import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function BgCompanent() {
    return (
        <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', maxWidth: '708px' }}>
            <Image src={'/iDYN.png'} alt={"iDYN Games logo"} width={122} height={75} />
            <Image src={'/auth-screens.png'} alt={"Auth Screen"} width={500} height={331} className="ml-[55px] mr-[55px] mb-[65px]" />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: "bold", textAlign: 'center', paddingY: '5px' }}>Запустите свою кросс-платформенную Игру или Приложение за несколько минут</Typography>
            <Typography variant="caption" sx={{color: 'white', textAlign:"center", maxWidth: '670px'}}>
                Запустите свою кросс-платформенную Игру или Приложение за несколько минут - а мы обеспечим всю инфраструктуру!<br/>
                Создайте свою экосистему игр и приложений, связанных единой валютой и предметами.<br/>
                Дайте пользователям возможность использовать одни и те же активы в разных играх и приложениях.<br/>
                И все это работает «из коробки», не требуя от вас ни единой строчки кода.<br/>
            </Typography>
        </Stack>
    )
}
