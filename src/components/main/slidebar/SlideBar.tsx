'use client'
import { Stack, Typography } from "@mui/material";
import { LayoutGridIcon, Receipt, StickyNote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";





export function SlideBar() {

    
    const [page, setPage] = useState("main")
    const [isHover, setIsHover] = useState(false)

    const pathname = usePathname()
         useEffect(() => {
        if (pathname === '/') {
          setPage('main')
        } else {
          setPage('bank')
        } 
      }, [pathname])

    return (
        <Stack
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={()=> setIsHover(false)}
            
            sx={{
                width: isHover ? '265px': '75px',
                height: "100vh",
                bgcolor: '#0d0e12',
                color: "#9A9CAE",
                transition: 'all 0.2s ease-in-out'
            }}>
            <Stack width={isHover ? 265 : 75} height={75} sx={{ display: 'flex', justifyContent: "center", padding: "0px 20px", borderBottom: '1px dashed #1F212A' }}>
                <Image src={isHover ? '/idyn/horisontLogo.svg': '/logos/custom-2.svg'} alt="logo" width={isHover ? 120: 30} height={isHover ? 25 : 20} />
            </Stack>
            <Stack height={'100%'}
                sx={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Stack spacing={2} sx={ {width: isHover ? '232px': '75px', transition: 'all 0.2s ease-in-out'}} >
                    <Link href='/' onClick={() => setPage('main')} >
                        <Stack direction={'row'} spacing={3} alignItems={'center'}
                            sx={{
                                padding: '8.45px 13px' ,
                                backgroundColor: page === 'main' ? '#1C1C21' : 'transparent',
                                borderRadius: page === 'main' ? '6px' : '0',
                                transition: 'all 0.2s ease-in-out',
                                color: page === 'main' ? 'white' : "#9A9CAE"
                            }} >

                            <LayoutGridIcon width={20} height={20}/>
                            {isHover && <Typography sx={{
                                fontSize: '14.3px',
                                '&:hover': {
                                    color: "white"

                                }
                            }}>
                                Мои проекты
                            </Typography>}
                        </Stack>
                    </Link>
                    <Link href={'/balance'} onClick={() => setPage('bank')}>
                        <Stack direction={'row'} spacing={3} alignItems={'center'}
                            sx={{
                                padding: '8.45px 13px',
                                backgroundColor: page === 'bank' ? '#1C1C21' : 'transparent',
                                borderRadius: page === 'bank' ? '6px' : '0',
                                transition: 'all 0.2s ease-in-out',
                                color: page === 'bank' ? 'white' : "#9A9CAE"
                            }} >
                            <Receipt />
                            {isHover &&
                            <Typography sx={{
                                fontSize: '14.3px',
                                '&:hover': {
                                    color: "white"

                                }
                            }}>Мои счета</Typography>
                            }
                        </Stack>
                    </Link>

                </Stack>
                <a href={"https://docs.idosgames.com/"} target="_blank" rel="noopener noreferrer">
                <Stack  direction={"row"} gap={2} sx={{
                    width: isHover ? '226px': '75px', 
                    transition: 'all 0.2s ease-in-out',
                    backgroundColor: '#3F425459',
                    justifyContent:'center',
                    alignItems: "center",
                    textAlign: "center",
                    padding: '11px 0',
                    borderRadius: '6px'
                }}>
                    
                        
                        {isHover &&
                        <Typography fontSize={14.3}>
                            Документация
                        </Typography>
                        }
                        <StickyNote />
                    
                </Stack>
                </a>
            </Stack>
        </Stack>
    )
}
