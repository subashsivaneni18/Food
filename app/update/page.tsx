"use client"
import React, { useEffect, useMemo, useState } from 'react'
import getItems from '../actions/getItems'
import axios from 'axios'
import { item } from '@prisma/client'
import { useRouter } from 'next/navigation'


const page = () => {

  const [items,setItems] = useState([])

  const router = useRouter()


   useMemo(()=>{
    async function fetchItems() {
      const res = await axios.get("/api/item")
         setItems(res.data)
    }
    fetchItems()
  },[])


  console.log(items)
  



  return (
    <div className=' flex justify-center items-center w-[100vw] h-[100vh] relative'>

        <div className='w-[80vw] h-[80vh]  overflow-y-auto border-[1px] border-white mx-auto rounded-lg'>
           <p className='text-xl p-4'>Items</p>
           <div className='flex flex-col gap-4 items-center w-[100%] h-[100%]'>
              {items.map((i:item)=>(
                <p
                 onClick={()=>router.push(`/update/${i.id}`)}
                 className='p-2 text-xl border-[1px] broder-white w-[50%] rounded-lg cursor-pointer hover:bg-gray-600 '
                 key={i.title}>
                  {i.title}
                </p>
              ))}
           </div>
        </div>
    </div>
           
  )
}

export default page
