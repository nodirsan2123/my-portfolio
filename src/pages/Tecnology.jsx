import React from 'react'

export default function Tecnology() {
  return (
    <div className='w-[90%] mx-auto my-[40px]'>
      <div className='my-[20px] flex justify-center'>
        <p className='w-[450px] text-center text-xl  text-slate-900'>I am currently learning Javascript, PHP, and Next.js. In the future, I aim to develop reliable large-scale deployments using technologies like Kubernetes and Docker.</p>
      </div>
      <div className='w-[50%] mx-auto'>
      <div className='flex w-[100%] justify-between'>
        <div>
          <p className='text-xl font-semibold text-slate-700'>Frontend:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-semibold text-slate-700'>Backend:</p>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-semibold text-slate-700'>Databases:</p>
          <ul>
            <li>mySQLlite</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-semibold text-slate-700'>Version Control: </p>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
