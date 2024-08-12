'use client';

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import { TESTIMONIAL } from '@/constants/data';
import { Card, CardContent, CardHeader,CardDescription,CardTitle } from './ui/card';
import Image from 'next/image'; 
import Accordion from './Accordion';



export default function Testimonials() {
  return (
 
    <section className='max-padd-container
    py-16 xl:py-28 text-center 
    xl:text-start'>
        {/* container*/}
        <div className='flex flex-col xl:flex-row gap-16'>
            {/* left */}
            <div className='flex flex-col xl:max-w-[50%]'>
                {/* title */}
                <div className="flex flex-col xl:justify-center font-bold">
          <span className="text-primary uppercase">Testimonials</span>
          <h3 className="h3 font-extrabold">People Says</h3>
          
        </div>

        {/* projects */}
        <div className=' mx-auto max-w-[70%] xl:max-w-full'>        
            <Swiper 
            breakpoints={
                {
                    640:{
                        slidesPerView:1,
                        spaceBetween:30,
                    },
                    768:{
                        slidesPerView:2,
                        spaceBetween:30,
                    },
                }}
                pagination={{
                    clickable:true,
                }}
                modules={[Pagination]}
                className=" h-[399px] mt-10 "
                >
                {TESTIMONIAL.map((testimonial,i)=>(
                    <SwiperSlide key={i}>
                        <TestimonialItem
                        title={testimonial.title}
                        url={testimonial.url}
                        profession={testimonial.profession}
                        desc={testimonial.desc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        
        </div>


            </div>

            {/* right side */}
            <div className='xl:max-w-[50%]'>
                <div className='flex flex-col xl:justify-center
                mb-10'>
                    <span className='text-primary uppercase font-bold'>
                        FAQs
                    </span>
                    <h3 className='h3 font-extrabold'>
                        Frequently asked questions
                    </h3>
                </div>
                <div className='flexCenter xl:justify-start'>
                    <Accordion/>
                    </div>
            </div>
            </div>
    </section>
  )
}


const TestimonialItem = ({title,url,profession,desc})=>{
    return(
        
      <Card className='my-8 rounded-md z-10 hover:border-[#fdf3fb] hover:border-2 '>
        <CardHeader className='pb-2 flexCenter xl:items-start'>
            <Image
             src={url}
             alt='testimonials'
             height={77}
             width={77}
             className='rounded-full mb-4 z-20'
            />
        </CardHeader>
        <CardContent>
        <CardTitle> {title}</CardTitle>
            <p className='mb-4'>{profession}</p>
            <span className='absolute top-0 right-4 z-10 dark:opacity-10'>
                <Image src={'/quote.svg'}
                alt="quote"
                height={77}
                width={77}
                />

            </span>
           
        <CardDescription>
        {desc}
        </CardDescription>
        </CardContent>
      </Card>
    
    )
}