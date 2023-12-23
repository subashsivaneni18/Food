import { db } from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET =async (req:NextRequest) =>{
    try {
        const url = new URL(req.url)
        const type = url.toString().split("/").pop();

        const items = await db.item.findMany({
            where:{
                type:type
            }
        })

        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}