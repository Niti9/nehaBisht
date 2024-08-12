import React from 'react'
import Link from 'next/link'
import {RiDribbbleFill,RiGithubFill,RiInstagramFill,RiLinkedinFill,RiTwitterFill, RiYoutubeFill} from 'react-icons/ri';



export default function SocialIcons() {
  return (


    <div className='flex gap-6 pr-4 animate-bounce'>

        <Link href={'https://www.youtube.com/@neyyha/featured'} className='text-[#08d9d6] text-2xl hover:translate-y-2 transition-all duration-500'><RiYoutubeFill/></Link>
        <Link href={'https://www.instagram.com/neyyha9/'} className='text-[#f08a5d] text-2xl hover:translate-y-2 transition-all duration-500'><RiInstagramFill/></Link>
        <Link href={''} className='text-[#ff2e63] text-2xl hover:translate-y-2 transition-all duration-500'><RiTwitterFill/></Link>
        <Link href={'https://www.linkedin.com/in/neha-bisht-246300282'} className='text-[#0a66c2] text-2xl hover:translate-y-2 transition-all duration-500'><RiLinkedinFill/></Link>
        <Link href={''} className='text-[#f9ed69] text-2xl hover:translate-y-2 transition-all duration-500'><RiDribbbleFill/></Link>
        <Link href={''} className='text-[#5272f2] text-2xl hover:translate-y-2 transition-all duration-500'><RiGithubFill/></Link>
    </div>
  )
}
