import React from 'react'
import { Heart, HeartPulse, Soup } from 'lucide-react'

const Card = () => {
  return (
     <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
     <a href="" className='relative h-32'>
       <img className='rounded-md w-full h-full object-cover cursor-pointer' src="/vite.svg" alt="" />
       <div className="absolute bottom-0 left-2 bg-white rounded-full p-2 cursor-pointer flex items-center gap-1 text-sm">
         <Soup size={"20"} /> 7 Servings
       </div>

       <div className="absolute top-1 right-2 bg-white rounded-full p-2 cursor-pointer">
         <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />
       </div>
     </a>

     <div className='flex mt-1'>
       <p className='font-bold tracking-wide '>Biriyani</p>
     </div>
     <p className='my-2'>Indian</p>
     <div className="flex gap-2 mt-auto">
       <div className="flex gap-1 bg-[#d6f497] items-center p-2 rounded-md">
         <HeartPulse size={14} />
         <span className='text-sm tracking-tighter font-semibold'>Not Health</span>
       </div>
       <div className="flex gap-1 bg-[#d6f497] items-center p-2 rounded-md">
         <HeartPulse size={14} />
         <span className='text-sm tracking-tighter font-semibold'>Health</span>
       </div>
     </div>
   </div>
  )
}

export default Card