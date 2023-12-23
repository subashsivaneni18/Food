import React from 'react'
import Logo from './Logo'
import Search from './Search'
import NavIcons from './NavIcons'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Navbar = () => {

  const {status} = useSession()
  const router = useRouter()

  return (
    <div className="w-screen py-5 shadow-white h-[70px] fixed z-50 top-0 flex justify-center items-center bg-black text-white ">
      <div className=" py-4  flex justify-between gap-5 m-3 items-center ">
        <Logo />
        <Search />
        <p
         className='cursor-pointer'
         onClick={status==='authenticated'?()=>signOut():()=>router.push('/login')}
        >{status === "authenticated" ? "Logout" : "Login"}
        </p>
        <NavIcons />
      </div>
    </div>
  );
}

export default Navbar
