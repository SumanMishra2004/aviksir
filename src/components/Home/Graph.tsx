import { Dancing_Script } from 'next/font/google'
import React from 'react'
import { Button } from '../ui/button'

const DancingScript = Dancing_Script({
    weight: ['400', '700', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
})

function Graph() {
  return (
    <div className='w-full h-fit flex items-center justify-around py-14 md:flex-row flex-col gap-9'>
        <img src="/graph.png" alt="" className='md:w-[40%] h-auto w-full' />
        <div className="h-full md:w-[40%] w-full flex gap-6 flex-col md:px-0 px-6">
            <p className='lg:text-6xl md:text-4xl text-3xl text-black font-semibold'>
                Connect your <br/>idea with the world  <span className={`text-blue-600 ${DancingScript.className}`}>abcde</span>.
            </p>
            <p className='text-xl text-black font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, magnam veritatis? Dolor repudiandae aut, ipsum blanditiis sed ad mollitia vitae est laboriosam perspiciatis 
            </p>
            <Button  className='py-6 px-7 md:w-fit w-full  text-xl font-medium rounded-xl shadow-xl shadow-blue-200 border border-blue-400'>Create a blog</Button>
            
        </div>
    </div>
  )
}

export default Graph