// "use client";
// import { WORKDATA } from "@/constants/data";
// import React from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import PfolioCard from "./PfolioCard";
// import 'swiper/css'
// import 'swiper/css/pagination';
// import {Pagination} from 'swiper/modules';


// export default function Portfolio() {
//   return (
//     <section className="xl:max-padd-container py-16 xl:py-28 text-center
//     xl:text-start bg-[#fdf3fb] dark:bg-transparent  ">
//       {/* container */}
//       <div className="flex flex-col xl:flex-row gap-6">
//         {/* title */}
//         <div className="flex flex-col xl:justify-center font-bold">
//           <span className="text-primary uppercase">Projects</span>
//           <h3 className="h3 font-extrabold">My Creations</h3>
//         </div>
//         {/* <div className="mx-auto  max-w-[70%] md:min-w-full xl:max-w-[70%]         "> */}
//         <div className="mx-auto  max-w-[70%] lg:max-w-[90%] xl:max-w-[70%]         ">
//             <Swiper 
//             breakpoints={
//                 {
//                     640:{
//                         slidesPerView:1,
//                         spaceBetween:30,
//                     },
//                     768:{
//                         slidesPerView:2,
//                         spaceBetween:30,
//                     },
//                 }}
//                 pagination={{
//                     clickable:true,
//                 }}
//                 modules={[Pagination]}
//                 className="h-[422px] sm:h-[477px] mt-10"
//                 >
//                 {WORKDATA.map((project,i)=>{
//                     if(project.category === 'fullStack')
//                     {
//                         return <SwiperSlide key={i}
//                         className="flexCenter">
//                             <PfolioCard
//                             url={project.url}
//                             title={project.title}
//                             des={project.des}
//                             category={project.category}
//                             />
//                         </SwiperSlide>
//                     }
//                 })}
//             </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";
import { WORKDATA } from "@/constants/data";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import PfolioCard from "./PfolioCard";
import 'swiper/css'
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export default function Portfolio() {
  return (
    <section className="xl:max-padd-container py-16 xl:py-28 text-center
    xl:text-start bg-[#fdf3fb] dark:bg-transparent  ">
      {/* container */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* title */}
        <div className="flex flex-col xl:justify-center font-bold">
          <span className="text-primary uppercase">Projects</span>
          <h3 className="h3 font-extrabold">My Creations</h3>
        </div>
        {/* <div className="mx-auto  max-w-[70%] md:min-w-full xl:max-w-[70%]         "> */}
        <div className="mx-auto  max-w-[70%] lg:max-w-[90%] xl:max-w-[70%]         ">
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
                className="h-[422px] sm:h-[477px] mt-10"
                >
                {WORKDATA.map((project,i)=>{
                    if(project.category === 'fullStack')
                    {
                        return <SwiperSlide key={i}
                        className="flexCenter">
                          
                              
                            <PfolioCard
                            url={project.url}
                            title={project.title}
                            des={project.des}
                            category={project.category}
                            />

                             
                        </SwiperSlide>
                    }
                })}
            </Swiper>
        </div>
      </div>
    </section>
  );
}
