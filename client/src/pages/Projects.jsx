import React from 'react'
import CallToAction from '../components/CallToAction'
export default function Projects() {
  return (
    <div className='min-h-screen mx-auto max-w-2xl flex justify-center items-center flex-col p-3 gap-6'>
    <h1 className='text-3xl font-semibold'>Projects</h1>
    <p className='text-md text-gray-500 '>Build fun and engaging projects while learning HTML,CSS and JavaScript</p>
    <CallToAction/>
    </div>
  )
}
