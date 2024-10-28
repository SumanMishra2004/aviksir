import { Dancing_Script } from 'next/font/google'
import React from 'react'
import { Button } from '../ui/button'


const DancingScript = Dancing_Script({
    weight: ['400', '700', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
})

function Homebar() {

    return (
        <div className='w-full h-fit flex md:gap-4 gap-8 justify-around items-center flex-col md:flex-row'>
            <div className="h-fit md:w-[45%] w-full gap-6 text-center md:text-start flex flex-col px-4 md:px-0">
                <p className='lg:text-7xl md:text-5xl text-3xl text-black font-semibold leading-tight'>
                    Meet our <br className='hidden md:block' /> <span className={`${DancingScript.className} text-blue-600 font-bold`}>favorate</span> new <br />blog channel.
                </p>
                <p className=' text-xl text-black font-light '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus odio tempora expedita quos, atque nostrum eligendi? Eius sed possimus,
                </p>
                <div className='h-fit w-full flex items-center justify-center md:justify-start'>

                <Button  className='py-6 px-7 w-fit  text-xl font-medium rounded-xl shadow-xl shadow-blue-200 border border-blue-400'>Join us</Button>
                </div>
            </div>
            <img src="/homefirstelement.png" alt="" className='h-auto md:w-[35%] w-full' />
        </div>
    )
}

export default Homebar