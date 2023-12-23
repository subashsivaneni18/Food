"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'



const icons = [
    {
        "label":"Orders",
        "href":"/orders"
    },
    {
        "label":"Menu",
        "href":'/menu'
    },
    {
        "label":"Cart",
        "href":"/cart"
    }
    
]

const NavIcons = () => {

    const {data} = useSession()

  return (
    <div className='w-[20vw] flex gap-6'>
        {icons.map((icon)=>(
            <Link href={icon.href} key={icon.label}>
                {icon.label}
            </Link>
        ))}
        <Link href="/admin">{data?.user?.isAdmin && "Admin"}</Link>
    </div>
  )
}

export default NavIcons
