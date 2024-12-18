import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between py-4'>
        <Link to={"/"}>
        <div className='flex items-center gap-2 text-2xl font-extrabold'>
            <img src={Logo} alt="logo" className='w-10' />
            <span className='text-slate-800'>My portfolio</span>
        </div>
        </Link>
        <div className='flex gap-3 text-[21px] font-normal'>
            <Link className='border bg-slate-100 py-2 px-3 rounded active:bg-slate-600 active:text-white duration-200' to={"/main"}>main</Link>
            <Link className='border bg-slate-100 py-2 px-3 rounded active:bg-slate-600 active:text-white duration-200' to={"/tecnology"}>tecnology</Link>
            <Link className='border bg-slate-100 py-2 px-3 rounded active:bg-slate-600 active:text-white duration-200' to={"/myself"}>myself</Link>
        </div>
    </div>
  )
}
