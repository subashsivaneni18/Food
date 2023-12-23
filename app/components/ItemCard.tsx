import Image from 'next/image'
import React from 'react'

interface ItemCardProps{
   title:string,
   img:string,
   price:number
}

const ItemCard:React.FC<ItemCardProps> = ({
  title,
  img,
  price
}) => {
  return (
    <div>
      <div className="w-[45vw] mt-5 mx-auto shadow-lg  bg-gray-800 py-3 rounded-lg flex items-center justify-between">
        <div className="text-black ml-4">
          <p className="text-xl font-bold text-white">{title}</p>
        </div>
        <div className="mr-4 rounded-lg flex gap-6">
          <Image
            src={img}
            width={100}
            height={100}
            className="rounded-lg"
            alt="Curry"
          />
          <div>
            <p className='text-center'>{price}</p>
            <div className="flex gap-3 items-center">
              <p className="cursor-pointer bg-orange-400 hover:bg-orange-600 duration-200 p-2 rounded-lg">
                Add
              </p>
              <p className="cursor-pointer bg-orange-400 hover:bg-orange-600 duration-200 p-2 rounded-lg">
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard
