
import Image from 'next/image'
import React from 'react'

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];




function iterateArray(): number {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
  }, 5000); // 5000 milliseconds = 5 seconds
  return index;
}




var index: number = iterateArray();

console.log(index)


const Hero = () => {
  return (
    <div className='w-[100vw] flex justify-center'>
      <div className=" w-[100vw] h-[calc(100vh-70px)] relative ">
        <Image
          className="w-[100%] h-[100%]"
          src={images[index]}
          fill
          alt="Pic"
          objectFit="cover"
        />

        <div className='w-[100vw] h-[calc(100vh-70px)] bg-black/70 absolute top-0'/>
      </div>
    </div>
  );
}

export default Hero
