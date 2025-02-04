import React from 'react'
import img1 from '../images/project1.png'
import img3 from '../images/projext3.png'
import img4 from '../images/project4.png'
import img5 from '../images/project5.png'

export default function Projects() {
    return (
        <div>
            <h1 className='text-5xl font-bold py-4 pt-8 text-slate-700'>Projects</h1>
            <div className='grid grid-cols-4 gap-8 py-12'>
                <div className='relative group'>
                    <img
                        className='w-[100%] bg-blue-500 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:brightness-50 rounded-xl'
                        src={img1}
                        alt=""
                    />
                    <a
                        href='https://online-shop-alpha-opal.vercel.app/'
                        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-lg text-white font-semibold  px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 z-10 hover:scale-105 underline'
                    >
                        Visit site
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        className='w-[100%] bg-blue-500 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:brightness-50 rounded-xl'
                        src={img5}
                        alt=""
                    />
                    <a
                        href='https://writers-one.vercel.app/'
                        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-lg text-white font-semibold  px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 z-10 hover:scale-105 underline'
                    >
                        Visit site
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        className='w-[100%] bg-blue-500 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:brightness-50 rounded-xl'
                        src={img3}
                        alt=""
                    />
                    <a
                        href='https://my-portfolio-lovat-one-66.vercel.app/'
                        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-lg text-white font-semibold  px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 z-10 hover:scale-105 underline'
                    >
                        Visit site
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        className='w-[100%] bg-blue-500 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:brightness-50 rounded-xl'
                        src={img4}
                        alt=""
                    />
                    <a
                        href='https://5-oy-imtixon-gilt.vercel.app/'
                        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-lg text-white font-semibold  px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 z-10 hover:scale-105 underline'
                    >
                        Visit site
                    </a>
                </div>
            </div>

        </div>
    )
}
