'use client'
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface CardProps {
  image: string;
  description: string;
  title: string;
  price?: number;
 
}

const Card: React.FC<CardProps> = ({
  image,
  description,
  title,
  price,
}) => {

  const router = useRouter()

  const handleClick = useCallback((cuisine:string)=>{
      var url = `/menu/${cuisine}`
      router.push(url)
  },[router])

  return (
    <div 
    onClick={()=>handleClick(title)}
    className="max-w-sm rounded overflow-hidden shadow-lg h-[450px] cursor-pointer hover:border-[1px] ">
      <img
        className="w-full hover:scale-110 transition-all duration-200"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-500 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
