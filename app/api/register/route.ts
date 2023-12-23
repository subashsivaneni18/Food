import { db } from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (req:Request)=>{
    const {email,username,password,isAdmin} =await req.json()

    if(!email || !username ||!password)
    {
        return NextResponse.json("Invalid Creddentials")
    }

    const user = await db.user.create({
        data:{
            email,
            password,
            username,
            isAdmin
        }
    })

    return NextResponse.json(user)
}