"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

interface MenuCardPros{
    src:string,
    label:string
}

const MenuCard:React.FC<MenuCardPros> = ({
    src,
    label
}) => {

    const router = useRouter()

  return (
    <div 
    onClick={()=>router.push(`/items/${label}`)}
    className="w-[350px] h-[300px] bg-black rounded-2xl cursor-pointer">
      <div className="relative">
        <div 
        className="w-[350px] h-[300px]  mx-auto rounded-xl absolute flex justify-end flex-col "
        >
            <Image
             src={src}
             fill
             alt={label}
             objectFit='cover'
             className='rounded-2xl hover:scale-110 duration-200'
            />
          <p className="absolute text-white m-5 font-extrabold text-[2rem]">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard
