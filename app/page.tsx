"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import OffersSlider from './components/OffersSlider/OffersSlider';



export default function Home() {

  return (
    <div className='overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <div className="relative top-[70px]">
        <Hero />
        <div className="w-[100vw] flex justify-center">
          <div className='w-[90vw]'>
            <OffersSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
