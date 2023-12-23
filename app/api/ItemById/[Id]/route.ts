import { db } from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const Id = url.toString().split("/").pop();

    const item = await db.item.findUnique({
      where: {
        id:Id,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};

export const PATCH = async (req:Request)=>
{
 
    try {
        const {
title,
price,
type,
description,
cuisine,
image} = await req.json()

 const url = new URL(req.url);
 const Id = url.toString().split("/").pop();

 if(!Id || typeof Id!='string')
 {
   throw new Error('Invalid Id')
 }

const item = await db.item.updateMany({
  where: {
    id: Id,
  },
  data: {
    title,
    price,
    type,
    description,
    cuisine,
    image,
  },
});

return NextResponse.json(item)
    } catch (error) {
      console.log(error)
    }
  
}
