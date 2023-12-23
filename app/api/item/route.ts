import { NextResponse } from "next/server"
import {db} from '@/libs/prismadb'

export const POST = async (req:Request)=>{
   try {
     const { title, description, price, type, image, cuisine } =
       await req.json();

     if (!title || !description || !price || !image) {
       return NextResponse.json("Invalid ");
     }

     const item = await db.item.create({
       data: {
         title,
         description,
         price,
         type,
         image,
         cuisine,
       },
     });

     if (!item) {
       return NextResponse.json("Item not created", { status: 400 });
     }

     return NextResponse.json(item, { status: 200 });
   } catch (error) {
     console.log(error)
   }
}

export const GET = async(req:Request)=>{
     
    try {
        const items = await db.item.findMany({});
        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }

}

