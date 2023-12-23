"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {

  const router = useRouter()

  return (
    <div className='w-[10vw] cursor-pointer' onClick={()=>router.push('/')}>
      <p>LOGO</p>
    </div>
  )
}

export default Logo
