'use client'

import BgCompanent from "@/components/authComps/bgcComps/BgCompanent"
import ForgotPassword from "@/components/authComps/ForgotPassword"


export default function page() {
    return( 
        <div className="flex min-h-screen w-screen">
            <div className="w-1/2 min-h-screen flex justify-center items-center">
                <ForgotPassword />
            </div>
            <div className="w-1/2 min-h-screen bg-[url('/auth/auth-bg.png')] bg-cover justify-center align-center">
                <BgCompanent />
            </div>
        </div>
    )
}