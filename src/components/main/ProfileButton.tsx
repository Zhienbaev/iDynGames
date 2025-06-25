'use client'

import { Button, Menu, MenuItem, Paper, Stack, Typography } from "@mui/material"
import Image from "next/image"
import * as React from 'react'
import Fade from '@mui/material/Fade'
import { SessionProvider, signOut } from "next-auth/react"
import GetEmail from "./GetEmail"

export default function ProfileButton() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Stack
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            <Button
                sx={{marginLeft:0, padding: 0, minWidth: 0, width: 40, height: 40, cursor: 'pointer' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
            >
                <Image src={"/avatars/blank.png"} alt="профиль" width={40} height={40} className="rounded-sm"/>
            </Button>

           
                    <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                slotProps={{
                    list: {
                        'aria-labelledby': 'fade-button',
                    },
                }}
                sx={{
                    cursor: 'pointer',
                    marginRight: '200px',
                    
                }}
                MenuListProps={{
                    onMouseEnter: () => { },       // не закрывать, пока наведено
                       // закрывать при уходе мыши
                }}
            >
                 <Paper sx={{width: '300px', height:'100px'}}>
                <Typography sx={{ 
                    width: '100%', 
                    height: '50%', 
                    gap: '5px',  
                    display: "flex",
                    fontSize: '12px', 
                    alignItems: 'center',
                    justifyContent: "center",
                    textAlign:"center"
                    }}>
                    <SessionProvider>
                        <GetEmail/>
                    </SessionProvider>
                    
                </Typography>
                <MenuItem onClick={() => signOut({ callbackUrl: "/auth/login" })} sx={{ width: '100%', height: '50%', gap: '5px', fontSize: '12px', alignItems: 'center' }}>
                    Выйти из системы
                </MenuItem>
                </Paper>
            </Menu>
            
            
        </Stack>
    )
}
