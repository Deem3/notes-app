import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../utils/hooks/useSignup'
// react-icons
import {SiCoffeescript} from 'react-icons/si'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, isLoading, err} = useSignup()
  const [open, setOpen] = useState(false)
  const handleSubmit =  async(e) => {
    e.preventDefault()

    await signup(email, password)
  }
  const toggle = () => {
    open === true ? setOpen(false) : setOpen(true)
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white rounded-xl shadow w-96 h-96'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center mt-12 my-4'>
          <SiCoffeescript className='h-7 w-7 text-green-500 mx-2'/>
          <p className='font-lobster text-green-500 text-2xl'>Signup</p>
          </div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center [&>*]:my-3'>
              <div className='relative'>
                <input className='p-2 focus:outline-none border-b focus:border-b-2 focus:border-green-500 placeholder-transparent peer' autoComplete='off' type="email" id='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                <label className='absolute left-1 text-xs -top-2 text-green-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all peer-placeholder-shown:text-gray-400' htmlFor="email">email</label>
              </div>
              <div className='relative'>
              <input className='p-2 focus:outline-none border-b focus:border-b-2 focus:border-green-500 placeholder-transparent peer' autoComplete='off' type={open === false ? 'password' : 'text'} id='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                <label className='absolute left-1 text-xs -top-2 text-green-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all peer-placeholder-shown:text-gray-400' htmlFor="password">password</label>
                {open === false ?  <AiOutlineEye className='absolute top-3 right-2 h-5 w-5 hover:text-green-500 cursor-pointer' onClick={toggle}/>: <AiOutlineEyeInvisible className='absolute top-3 right-2 h-5 w-5 hover:text-green-500 cursor-pointer' onClick={toggle}/>}
              </div>
              <button disabled={isLoading} className='bg-gray-300 rounded-lg shadow p-2 w-64 hover:bg-gray-200 hover:text-green-500 transition-all'>Signup</button>
              {err && <div>{err}</div>}
              </div>
              <Link className='flex justify-center hover:text-green-500' to="/signin">I've an account</Link>
            </form>
        </div>
      </div>
    </div>
  )
}
