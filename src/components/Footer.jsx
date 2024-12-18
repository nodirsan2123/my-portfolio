import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'



export default function Footer() {
    return (
        <div className='flex my-[40px] flex-col items-center gap-5'>
            <Link to={"/main"}>
                <div className='flex items-center gap-2 text-2xl font-extrabold py-2'>
                    <img src={Logo} alt="logo" className='w-10' />
                    <span className='text-slate-800'>My portfolio</span>
                </div>
            </Link>
            <div className='flex flex-col'>
                <p>Email: bronodir094@gmail.com | Tel: +998 90 133 12 17</p>
                Follow me on:
                <div className='py-2 flex justify-center gap-2'>
                    <a className='hover:text-cyan-800' href="https://facebook.com/your-profile">Facebook</a> |
                    <a className='hover:text-cyan-800' href="https://twitter.com/your-profile">Twitter</a> |
                    <a className='hover:text-cyan-800' href="https://vercel.com/nodirsan2123s-projects">Vercal</a>
                </div>

                <div>
                    <hr style={{color:"black"}} />
                    <p className='py-2'>© 2024 Your Name. All rights reserved.</p>
                    <hr style={{color:"black"}} />
                </div>

            </div>
        </div>
    )
}
