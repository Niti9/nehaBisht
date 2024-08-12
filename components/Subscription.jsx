import React from 'react'
import Link from 'next/link'
// import { Button } from './ui/button'
import { Button } from './ui/moving-border'

export default function Subscription() {
  return (
    <section>

   <div className='max-padd-container bg-[#fdf3fb] dark:bg-secondary rounded-md'>
    <div className='flexCenter flex-col xl:flex-row gap-8 py-8'>
      <h3 className='medium-32 leading-none text-center xl:text-start text-primary dark:text-secondary-foreground'>Let's connect and craft excellence
      </h3>
      <Link href={'/contact'}>
      {/* <Button>Contact me</Button> */}
      <Button
        borderRadius="1.75rem"
        className="bg-primary text-white dark:bg-slate-900  text-[22px] dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Contact Me
      </Button>
      </Link>
    </div>
   </div>
    </section>
  )
}









