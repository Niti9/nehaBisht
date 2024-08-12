import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import Badge from "./Badge";
import { FaFigma, FaReact, FaUsers } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
// import { SparklesCore } from "./ui/sparkles";
// import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import ShootingStars from "./ui/shooting-stars";

export default function Hero() {


  // const words = [
  //   {
  //     text:'Innovative',
  //   },
  //   {
  //     text:'Web',
  //   },
    
  //   {
  //     text:'Developer',
  //   },
    
  //   {
  //     text:'&',
  //   },
    
  //   {
  //     text:'Strategic',
  //   },
    
  //   {
  //     text:'Technical',
  //   },
    
  //   {
  //     text:'Executive',
  //   },
    
  //   {
  //     text:'Transforming',
  //   },
  //   {
  //     text:'Challenges',
  //   },
  //   {
  //     text:'into  ',
  //   },
  //   {
  //     text:'Strategic',
  //   },
  //   {
  //     text:'Digital',
  //   },
  //   {
  //     text:'Solutions',
  //   },
    
  // ]



  return (
    <section className="px-6 lg:px-20 mx-auto py-20 bg-[#fdf3fb] dark:bg-transparent">



      <div className="flexCenter gap-24 flex-col xl:flex-row">
        {/* left side */}
        <div className="flex flex-1 flex-col pt-12 xl:pt-32">

          {/* <h1 className="h1 !font-extrabold">From Pixels to Perfection Exploring the Essence of Web Design</h1> */}
          <h1 className="h1 !font-extrabold">Innovative Web Developer & Strategic Technical Executive</h1>


          <p >
            Explore my portfolio where creativity and functionality converge,
            showcasing innovative web development projects crafted with
            precision and passion for digital excellence.
          </p>

          {/* <div className="relative" >

           

            Explore my portfolio where creativity and functionality converge,
            showcasing innovative web development projects crafted with
            precision and passion for digital excellence.
            

            <div className="absolute  -top-56 ">
            
            <SparklesCore
           background="transparent"
           minSize={0.4}
           maxSize={1}
           particleDensity={400}
           className="w-full h-full"
           particleColor="#FFFFFF"
        />
              </div>
          </div> */}

          
          


          <div className="mt-6 flex gap-4">
            <Button className="gap-x-2 shadow-xl rounded-full
            h-11 px-8 py-2">
              Hire me <MoveRight size={20} />
            </Button>
            <Link href={"/nehaResume.pdf.pdf"}>
            <Button
              className="shadow-xl rounded-full bg-black hover:bg-[#222]
            text-white "
            >
              Download CV
            </Button>
            </Link>
          </div>
          <div className="mt-20">

            <SocialIcons/>
          </div>
        </div>

        {/* right side */}
       
            <Spotlight
        className="-top-40 left-0 md:left-[590px] md:-top-20 hidden xl:block"
        fill="white"
      />
        <div className="flex flex-1 relative z-10 top-12">
            <div>
              <div className="circle rounded-full w-full h-full">
              
                <Image
                //  src={'/bg.png'}
                 src={'/nehaBisht.jfif'}
                 
                // height={488}
                // width={488}
                height={488}
                width={488}
                priority
                alt="profileImage"
                className=" hover:scale-105 cursor-pointer transition-all
                duration-300 ease-in-out"
                />
              </div>

            </div>

            {/* photo badges */}
            <div className="hidden xl:flex">
                <Badge
                containerStyles={`absolute top-[60%] left-0 `}
                icon ={<FaFigma/>} 
                />
                <Badge
                containerStyles={`absolute -top-5 right-[45%] `}
                icon ={<FaReact/>} 
                />
                <Badge
                containerStyles={`absolute bottom-[10%] right-[27%] `}
                icon ={<SiNextdotjs/>} 
                />
                <Badge
                containerStyles={`absolute top-[10%] -left-12  !h-[55px]`}
                icon ={<FaUsers/>} 
                badgeText={'Projects Completed'}
                endCountNum={8}
                endCountText={'k'}
                />
                <Badge
                containerStyles={`absolute top-[22%] right-0 `}
                reviewCount={666}
                // icon ={<FaFigma/>} 
                />

            </div>
        </div>


       
      </div>
    </section>
  );
}
