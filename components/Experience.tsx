import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { EvervaultCard } from './ui/EvervaultCard'

const Experience = () => {
  return (
    <div id='education'>
     {/* <h1 className='heading'>
        My
        <span className='text-purple'> Education
        </span>
        <EvervaultCard text="My Education" />
     </h1> */}
     <div className='h-60'>
     <EvervaultCard text="My Education"/>
     </div>
     <div className='w-full mt-12 grid lg:grid-cols-4  grid-cols-1 gap-10'>
        {workExperience.map((card)=>(
            <Button
            key={card.id}
            duration={Math.floor(Math.random()*10000)+10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark: border-slate-800'
            
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold text-shadow text-shadow-white text-shadow-x-0 text-shadow-y-0 text-shadow-blur-5'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-bold'>
                            {card.desc}
                        </p>
                        <p className='text-start text-white-100 mt-3 font-'>
                            {card.timeframe}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
     </div>
    </div>
  )
}

export default Experience
