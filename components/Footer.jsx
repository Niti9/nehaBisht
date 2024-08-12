import React from 'react'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className='max-padd-container bg-[#fdf3fb] dark:bg-transparent py-8'>
    <div className='flexCenter flex-col gap-y-4'>
      <h4 className='text-[#222] dark:text-[white] dark:bg-transparent'>
        Follow me on Social Media
      </h4>
      <SocialIcons/>
      <hr className='h-[1px] w-2/3 my-3 bg-black dark:bg-white'/>
      <div className='text-black dark:text-[white] dark:bg-transparent mb-8'>
        Copyright &copy; Neha Bisht | All rights reserved.
      </div>
   
    </div>
   </div>
  )
}
