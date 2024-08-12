'use client';
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";

export default function Header() {

    const [header,setHeader] = useState();

    useEffect(()=>{

        const scrollYPos = window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setHeader(true):  setHeader(false)
    })

    return()=> window.removeEventListener('scroll', scrollYPos)
    })

  return (
    <header
      className={`${header ? 'shadow-md !py-3 dark:!bg-secondary': ' '} bg-[#fdf3fb] dark:bg-transparent
     sticky top-0 py-4 z-30 transition-all
     flexBetween px-6 lg:px-20 mx-auto`}
    >
      <Logo />


      <div className="flexCenter gap-x-8">
      <Nav
        containerStyles={'hidden xl:flex gap-x-12 capitalize bold-16'}
        linkStyles={'relative'}
        underlinesStyles={'absolute left-0 top-full h-[2px] w-full bg-primary rounded-full'}
      />
      <ThemeToggler />

      <div className="xl:hidden ">
      <MobileNav />
      </div>

      </div>

      
    </header>
  );
}
