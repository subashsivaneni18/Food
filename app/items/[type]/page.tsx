"use client"
import getItemByType from '@/app/actions/getItemByType';
import ItemCard from '@/app/components/ItemCard';
import Navbar from '@/app/components/Navbar'
import { item } from '@prisma/client';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

const page = () => {

    

     const pathname = usePathname();

     const type = pathname.split("/")[2].toLowerCase();
     
     const {data:items=[]} = getItemByType(type.toLowerCase())

      console.log(items)
    

  return (
    <div >
      <Navbar />
      <div className="relative top-[70px] ">
        <div className="w-[90vw]  mx-auto relative top-10">
          <p className='text-3xl font-bold text-white'>{type.toUpperCase()}</p>
          <div className='overflow-y-auto'>
            {items.map((i:item)=>(
              <ItemCard img={i.image} price={i.price} title={i.title} key={i.id} />
            ))}
          </div>
        </div>
            
      </div>
    </div>
  );
}

export default page
