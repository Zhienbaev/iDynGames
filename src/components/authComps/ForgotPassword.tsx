import { Button, Stack, TextField, Typography } from "@mui/material"
import Link from "next/link"


export default function ForgotPassword() {
    return (
        <Stack spacing={2} sx={{
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography variant="h5" sx={{fontWeight: 'bold'}} className=" text-5xl font-bold mb-3">Забыли пороль?</Typography>
            <Typography className="text-gray-400 fw-semibold fs-5 mb-[35px]" >Введите свой e-mail, чтобы сбросить пароль.</Typography>
            <Stack sx={{width: 400}}>
                <Typography className="mb-5" sx={{fontWeight: 'bold'}}>Email</Typography>
                <TextField
                    id="login-input"
                    variant="outlined"
                    label='Введите Email'
                    required
                    type="email"
                    fullWidth
                />
            </Stack>
            <Stack direction={"row"} spacing={4}>
                <Button variant="contained">Отправить</Button>
                <Button>
                    <Link href={"/auth/login"}>Отменить</Link>
                </Button>
                

            </Stack>
        </Stack>)
}
