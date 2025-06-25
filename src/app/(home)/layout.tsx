'use client'

import Header from "@/app/(home)/(main)/Header";
import { SlideBar } from "@/components/main/slidebar/SlideBar";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Подключаем Inter
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["cyrillic"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack direction={"row"}>
      <SlideBar />
      <Stack width={'100%'}>
        <header>
          <Header />
        </header>
        <Stack bgcolor={'#f9f9fb'} sx={{height: '100%' , padding: "30px"}}>
          {children}
        </Stack>
        
      </Stack>
    </Stack>

  );
}