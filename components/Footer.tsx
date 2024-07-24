import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { IoCall } from "react-icons/io5";
import { socialMedia } from '@/data'
import Link from 'next/link'
import { SparklesCore } from './ui/Sparkles';
import { nyght } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer className='mt-20 w-full mb-[100px] md:mb-5 pb-10' id="contact">
        

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] mb-2 text-shadow text-shadow-indigo-500 text-shadow-x-1 text-shadow-y-1 text-shadow-blur-9'>
            Reach Out to <span className={`${nyght} `}> Me!</span>
            </h1>
            <div className="w-[40rem]  relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
            <p className='text-white-200 md:mt-10 mt-5 text-center'>
            Discuss a project or just want to say hi? My Inbox is open for all.
            </p>
            <div className='gap-6 flex flex-row'>
            <a href='mailto:aryanraj409.1.2@gmail.com'>
                <MagicButton title="aryanraj409.1.2@gmail.com"
                icon={<FaLocationArrow/>}
                position='right'/>
            </a>
            <a href='tel: +91 8630098260'>
                <MagicButton title="+91 8630098260"
                icon={<IoCall />}
                position='right'/>
            </a>
            </div>
            <p className='text-white md:mt-10 mt-5 text-center'>
            Open for opportunities: <span className='text-green-500 font-bold'>Yes</span>
            </p>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Made with ❤️ by <a href='https://www.linkedin.com/in/aryan-rajput-18895b289' className=''>Aryan Rajput</a></p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-gray-900'>
                        <Link href={profile.src}>
                        <img src={profile.img} alt={profile.img}
                        width={20} height={20}/>
                        </Link>
                        </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
