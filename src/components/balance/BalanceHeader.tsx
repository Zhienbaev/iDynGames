'use client'
import { Stack, Typography } from "@mui/material";
import { Rowdies } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from 'clsx'
import { usePathname } from "next/navigation";


export default function BalanceHeader() {
    const [isPage, setIsPage] = useState('balance')
    const pathname = usePathname()
     useEffect(() => {
    if (pathname === '/balance') {
      setIsPage('balance')
    } else if (pathname === '/invoice') {
      setIsPage('schet')
    } else if (pathname === '/plan') {
      setIsPage('tarifPlans')
    } else {
      setIsPage('Referal')
    }
  }, [pathname])

    return (
        <Stack direction={'row'} spacing={3} padding={'0px 27px'}
            sx={{
                boxShadow: "0 0 2px rgba(120, 120, 120, 0.5)",
                bgcolor: 'white',
                borderRadius: '6px'
            }}
        >
            <Link href={"/balance"} onClick={()=>setIsPage('balance')} className={
                clsx('py-[20px] hover:border-b-2 hover:border-indigo-500', {
                    'border-b-2 border-indigo-500 text-indigo-500': isPage === 'balance',
                })} >
                <Typography fontSize={"13.8px"} fontWeight={'bold'} sx={
                    {
                        color: isPage === 'balance' ? 'indigo-500': '#99A1B7'
                    }
                }>
                    Баланс
                </Typography>
            </Link>
            <Link href={"/invoice"} onClick={()=>setIsPage('schet')} className={
                clsx('py-[20px] hover:border-b-2 hover:border-indigo-500', {
                    'border-b-2 border-indigo-500 text-indigo-500': isPage === 'schet',
                })}>
                <Typography fontSize={"13.8px"} fontWeight={'bold'} sx={
                    {
                        color: isPage === 'schet' ? 'indigo-500': '#99A1B7'
                    }}>
                    Счета
                </Typography>
            </Link>
            <Link href={"/plan"} onClick={()=>setIsPage('tarifPlans')} className={
                clsx('py-[20px] hover:border-b-2 hover:border-indigo-500', {
                    'border-b-2 border-indigo-500 text-indigo-500': isPage === 'tarifPlans',
                })}>
                <Typography fontSize={"13.8px"} fontWeight={'bold'} sx={
                    {
                        color: isPage === 'tarifPlans' ? 'indigo-500': '#99A1B7'
                    }}>
                    Тарифные Планы
                </Typography>
            </Link>
            <Link href={"/referall"} onClick={()=>setIsPage('Referal')} className={
                clsx('py-[20px] hover:border-b-2 hover:border-indigo-500', {
                    'border-b-2 border-indigo-500 text-indigo-500': isPage === 'Referal',
                })}>
                <Typography fontSize={"13.8px"} fontWeight={'bold'} sx={
                    {
                        color: isPage === 'Referal' ? 'indigo-500': '#99A1B7'
                    }}>
                    Реферальная Программа
                </Typography>
            </Link>
        </Stack>
    )
}
