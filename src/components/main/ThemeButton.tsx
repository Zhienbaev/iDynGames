'use client'

import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material"
import Image from "next/image"
import * as React from 'react'
import Fade from '@mui/material/Fade'

export default function ThemeButton() {
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
        >
            <Button
                sx={{ padding: 0, minWidth: 0, width: 40, height: 40, cursor: 'pointer' }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
            >
                <Image src="/themes/gen060.svg" alt="Светлый" width={18} height={18} />
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
                <MenuItem onClick={handleClose} sx={{ width: '175px', gap: '5px', background: '#A9A9A9', fontSize: '12px', alignItems: 'center' }}>
                    <Image src="/themes/gen060.svg" alt="Light" width={18} height={18} />
                    <Typography sx={{fontSize: '12px', marginLeft: '5px'}}>
                        Light
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ width: '175px', gap: '5px', fontSize: '12px', alignItems: 'center' }}>
                    <Image src="/themes/gen061.svg" alt="Dark" width={18} height={18} />
                    <Typography sx={{fontSize: '12px', marginLeft: '5px'}}>
                        Dark
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ width: '175px', gap: '5px', fontSize: '12px', alignItems: 'center' }}>
                    <Image src="/themes/gen062.svg" alt="System" width={18} height={18} />
                    <Typography sx={{fontSize: '12px', marginLeft: '5px'}}>

                        System
                    </Typography>
                </MenuItem>
            </Menu>
        </Stack>
    )
}
