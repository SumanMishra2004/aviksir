import React from 'react'
import CardProject from '../ui/CardProject'
import { Button } from '../ui/button'

function ProjectSection() {
    return (
        <div className='flex flex-col w-full h-auto gap-11 py-9 '>
            <p className='lg:text-7xl md:text-5xl text-3xl text-black text-center font-bold'>Here some of our blogs</p>
            <div className='h-auto w-full flex items-center justify-around flex-wrap gap-14'>

                <CardProject blogDescription={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores esse atque tempore vero autem, quae dolorum sapiente suscipit qui debitis, voluptas omnis recusandae saepe eligendi perspiciatis magni quasi assumenda?"} blogAuthor="Suman Mishra" blogTitle="Fish farming by iot and all cyber sequrity" blogRating={5} />
                <CardProject blogDescription={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores esse atque tempore vero autem, quae dolorum sapiente suscipit qui debitis, voluptas omnis recusandae saepe eligendi perspiciatis magni quasi assumenda?"} blogAuthor="Suman Mishra" blogTitle="Fish farming by iot and all cyber sequrity" blogRating={5} />
                <CardProject blogDescription={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores esse atque tempore vero autem, quae dolorum sapiente suscipit qui debitis, voluptas omnis recusandae saepe eligendi perspiciatis magni quasi assumenda?"} blogAuthor="Suman Mishra" blogTitle="Fish farming by iot and all cyber sequrity" blogRating={5} />
            </div>
            <Button  className='mx-auto bg-blue-600 rounded-xl border-2 border-blue-700 p-6 shadow-xl shadow-blue-400 text-2xl font-medium'>Read more !</Button>
        </div>
    )
}

export default ProjectSection