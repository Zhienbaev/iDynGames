'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

export default function GoogleButton(){
    return(
        <button onClick={() => signIn("google")} className="flex justify-center items-center btn btn-primary border-1 border-gray-700 rounded-sm p-[5px] cursor-pointer transition duration-300 
        hover:bg-[#e1e0e5] mb-[30px]">
            <Image
                src="/svg/google-icon.svg"
                alt="google Icon"
                width={18}
                height={18}
            />
            <span className="w-[338px] font-arial fw-[100]">Вход через аккаунт Google</span>
        </button>
    )
}