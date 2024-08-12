"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa6";

export default function Badge({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
  reviewCount,
}) {
  return (
    <div className={`${containerStyles} badge`}>
      {icon && (
        <div className="text-3xl text-primary dark:text-black">{icon}</div>
      )}
      {endCountNum && (
        <div className="flex flex-col">
          <div className="flexCenter gap-x-2">
            <div className="bold-36 leading-none text-primary dark:text-black">
              <CountUp end={endCountNum} duration={5} delay={1} />
              {endCountText}
            </div>
            <div className="max-w-[77px] leading-none medium-15 dark:text-black">
              {badgeText}
            </div>
          </div>
        </div>
      )}

      {/* review card */}
      {reviewCount && (
        <div>
          <div className="flex gap-x-4">

            <Image
              // src={"/user.png"}
              src={"/nehaBisht.jfif"}
              alt=""
              height={41}
              width={41}
              className="rounded-full"
            />
             
            <div className="flex flex-col">
              {/* <span className="bold-15 text-black">James Parker</span> */}
              <span className="bold-15 text-black">Neha Bisht</span>
              <span className="flexCenter text-xs text-primary dark:text-black">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-black pl-1">
                  (<CountUp end={reviewCount} duration={4} delay={1} />)
                </span>
              </span>
            </div>
          </div>
          {/* details */}
          <div>
            <h4 className="bold-15 my-2">Recent Reviews</h4>

            <div className="flex-col flex gap-3">
              <div className="flexCenter gap-x-2 text-black">
                <span className="bg-[#eaeaea] h-8 w-8 flexCenter rounded-full">RZ</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none"> Rehan Zaffar </span>
                  <p className="text-xs">She is an ideal candidate and too confident.</p>
                </div>
              </div>
              <div className="flexCenter gap-x-2 text-black">
                <span className="bg-[#f9f29f] h-8 w-8 flexCenter rounded-full">VS</span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none"> Vanshika Sharma </span>
                  <p className="text-xs">She posses excellent communication skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
