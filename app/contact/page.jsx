// import { Button } from "@/components/ui/button";
import { MovingBorder } from "@/components/ui/moving-border";
import { HomeIcon, MailIcon, MoveRight, PhoneCall, User2 } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function page() {
  return (
    <section
      className="px-6 lg:px-20 mx-auto py-16 xl:py-24 bg-[#fdf3fb]
    dark:bg-transparent"
    >
      <div className="flex flex-col xl:flex-row gap-12">
        {/* title */}
        <div className="flex flex-col flex-1">
          <span className="text-primary uppercase font-bold">GET IN TOUCH</span>
          <h3 className="h3 font-extrabold">Contact Me</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            officia necessitatibus assumenda, reprehenderit praesentium
            doloribus, facere odio obcaecati iure repudiandae magni!
          </p>

          <div className="flex flex-col gap-y-5 mt-6 medium-15">
            <div className="flex gap-x-3">
              <span>
                <User2 size={20} />
              </span>

              {/* <span> James Parker</span> */}
              <span> Neha Bisht</span>
            </div>
            <div className="flex gap-x-3">
              <span>
                <PhoneCall size={20} />
              </span>
              {/* <span>01234567</span> */}
              <span>+7906****96</span>
            </div>
            <div className="flex gap-x-3">
              <span>
                <MailIcon size={20} />
              </span>
              {/* <span>info@parker.com </span> */}
              <span>nehaBisht5308@gmail.com </span>
            </div>
            <div className="flex gap-x-3">
              <span>
                <HomeIcon size={20} />
              </span>
              {/* <span>123 Light View, Uttarakhand</span> */}
              <span>Khatima, Uttarakhand</span>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="flex-[1.5] ">
          <form className=" flex flex-col gap-4 w-full mx-auto max-w-[33rem]">
            <div className="flex gap-2 w-full">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="regular-14 rounded-lg px-4 py-2 dark:bg-secondary
            outline-none w-1/2 hover:border-2   dark:border-slate-800 dark:bg-slate-900"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="regular-14 rounded-lg px-4 py-2 dark:bg-secondary
            outline-none w-1/2  hover:border-2 dark:border-slate-800 dark:bg-slate-900"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="regular-14 rounded-lg px-4 py-2 dark:bg-secondary
            outline-none  hover:border-2 dark:border-slate-800 dark:bg-slate-900"
            />
            <textarea
              id=" "
              cols={10}
              rows={8}
              placeholder="Enter Your Message"
              className="regular-14
            rounded-lg px-4 py-2 dark:bg-secondary
            outline-none resize-none
             hover:border-2 dark:border-slate-800 dark:bg-slate-900"
            ></textarea>
            <div>
              {/* <Button className="gap-x-2 shadow-xl">
                Contact Me
                <MoveRight size={20} />
              </Button> */}

              <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-primary text-[22px] dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Contact Me
      </Button>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
