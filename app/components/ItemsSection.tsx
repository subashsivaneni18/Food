"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const ItemsSection = () => {

    const pathname = usePathname()

    const cuisine = pathname.split('/')[2]

    

  return (
    <div>

    </div>
  )
}

export default ItemsSection
