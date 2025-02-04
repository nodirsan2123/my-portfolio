import React from 'react'
import my_img from '../images/my_img.jpg'

export default function Main() {
  return (
    <div>
      <div  className='flex justify-center py-8 flex-col items-center gap-8' >
        <div>
          <p className='text-[42px] font-semibold text-slate-600'>Frontend Devoloper</p>
          <p className='text-[24px] text-slate-700 font-mono'>Nodirbek Rakhimjonov</p>
        </div>
        <div>
          <img src={my_img} alt="my img" className='w-[250px] rounded-[50%] text-center' />
        </div>
        <div className='text-center w-[full] '>
          <p className='w-[550px] text-slate-800 font-light text-[18px]'>Hello! I am Nodirbek, I love studying IT and learning new knowledge. Currently, I am studying the basics of programming and working with technologies such as React and Next.js. My goal is to contribute to the development of innovative applications and changes in production through technology.</p>

        </div>
      </div>
    </div>
  )
}
