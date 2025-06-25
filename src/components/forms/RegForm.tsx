import { Input, TextField, Typography, Button, Stack, Checkbox } from "@mui/material";
import Link from "next/link";
import { useState } from "react";



export default function LoginForm() {
    const [isChecked, setIsChecked ] = useState(false)
    const onSubmit = () => {
        return (console.log(123))
    }

    return (
        <form onSubmit={onSubmit} className="w-100">
            <Stack spacing={2}>
                <Stack>
                    <Typography sx={{ fontWeight: 'bold' }} >Email</Typography>
                    <TextField
                        id="login-input"
                        variant="outlined"
                        label='Введите Email'
                        required
                        type="email"
                        fullWidth
                    />
                </Stack>

                <Stack spacing={1}>
                    <Stack>
                        <Typography sx={{ fontWeight: 'bold' }}>Пороль</Typography>
                        <TextField
                            id="login-input"
                            variant="outlined"
                            label='Введите Пароль'
                            type="Password"
                            required
                            fullWidth
                        />
                    </Stack>
                    <Stack>
                        <Typography sx={{ fontWeight: 'bold' }}>Подтвердите пороль</Typography>
                        <TextField
                            id="login-input"
                            variant="outlined"
                            label='Подтвердите Пароль'
                            type="Password"
                            required
                            fullWidth
                        />
                    </Stack>
                </Stack>

                <Stack direction={"row"}  sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Checkbox value={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
                    <Typography sx={{ color: "gray"}}>
                        {`Я принимаю `}
                        <a href={"https://idosgames.com/en/terms/" } target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-200 transition duration:300"> 
                            Условия использования
                        </a>
                    </Typography></Stack>
                <Button type="submit" variant="contained" fullWidth disabled={!isChecked}>
                    Продолжить
                </Button>
            </Stack>
        </form>
    )
}
