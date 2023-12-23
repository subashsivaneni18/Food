"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'

const page = () => {

  const router = useRouter()

  return (
    <div className='overflow-y-hidden'>
      <Navbar/>
      <div 
      className=
      'relative top-[100px] w-[90vw] mx-auto items-center  h-[calc(100vh-80px)]'>
         <p className='text-3xl'>Manage Items</p>
         <div className='flex gap-20 h-[50vh] items-center w-full '>


            <p 
            onClick={()=>router.push('/create')}
            className='text-black bg-white text-2xl p-4 font-bold rounded-lg hover:bg-slate-300 cursor-pointer transition-all duration-150'>
              Create Items
            </p>

            <p 
            onClick={()=>router.push('/update')}
            className='text-black bg-white text-2xl p-4 font-bold rounded-lg hover:bg-slate-300 cursor-pointer transition-all duration-150'>
              Update Items
            </p>
            
         </div>
      </div>
    </div>
  )
}

export default page
