"use client"
import React, { useCallback, useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'
import { signIn } from 'next-auth/react'




const page = () => {

  const [variant,setVariant] = useState<'LOGIN'|'REGISTER'>('REGISTER')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername]=useState('')

    const toggleVariant = useCallback(() => {
      setVariant((variant) =>
        variant === "LOGIN" ? "REGISTER" : "LOGIN"
      );
    }, [variant]);

    const register = useCallback(async()=>{
        await axios.post('/api/register',{email,password,username})
        console.log("user created")
    },[email,password,username])



  return (
    <div className="w-screen h-screen bg-neutral-800 flex justify-center items-center ">
      <div className="w-[400px] h-[450px] bg-black rounded-lg p-5 flex flex-col items-center ">
        <div className="bg-black p-3 text-white text-3xl font-bold">
          {variant === "LOGIN" ? "LOGIN" : "Register"}
        </div>

        <div className="flex w-[350px] flex-col gap-5 mt-5 ">
          <div className="w-full">
            <Input
              label="Email"
              id="Email"
              value={email}
              type="text"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Input
              label="Password"
              id="Password"
              value={password}
              type="text"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>

          {variant === "REGISTER" && (
            <div className="w-full">
              <Input
                label="Username"
                id="username"
                value={username}
                type="text"
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-col gap-3 justify-center w-full items-center">
            <button 
             onClick={variant==='LOGIN'?()=>signIn('credentials',{email,password}):register}
            className="text-white bg-red-500 w-full p-3 rounded-lg hover:bg-red-700 transition-all">
              {variant === "LOGIN" ? "LOGIN" : "REGISTER"}
            </button>

            <p className="text-neutral-200">
              {variant === "REGISTER" ? "Have an Account" : "Don't have an Account Register"}

              <span
                className="cursor-pointer underline ml-2"
                onClick={() => toggleVariant()}
              >
                {variant === "LOGIN" ? "Register" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
