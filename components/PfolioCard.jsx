// import React from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { MdOutlineZoomOutMap } from "react-icons/md";
// import Link from "next/link";
// import Image from "next/image";
// import { BiSolidLike } from "react-icons/bi";
// import { FaEye } from "react-icons/fa6";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// export default function PfolioCard({ url, title, category, des }) {
//   return (
//     <Card className="relative rounded-xl overflow-hidden group">
//       <CardHeader>
//         <div >
//           <Badge className={` mb-3 capitalize text-lg  `}>{category}</Badge>
//         </div>
//         <div
//           className="rounded-lg !inline-flex relative
//         overflow-hidden"
//         >
//           <Image
//             src={url}
//             alt=""
//             height={299}
//             width={444}
//             className="rounded-lg"
//           />
//           {/* overlay */}
//           <div
//             className="absolute top-0 left-0 inset-0 bg-[#fdf3fb]
//             dark:bg-background opacity-0 group-hover:opacity-100 
//             transition-all duration-200 rounded-lg overflow-hidden"
//           ></div>
//           {/* icons */}
//           <div
//             className="flexCenter gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 
//             -translate-y-1/2 opacity-0 scale-0 group-hover:scale-100 
//             group-hover:opacity-100 transition-all duration-300"
//           >
//             <Link href={"/portfolio"} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
//               <MdOutlineZoomOutMap />
//             </Link>
//             <Link href={""} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
//               <BiSolidLike />
//               <p>112</p>
//             </Link>
//             <Link href={""} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
//               {" "}
//               <FaEye />
//               <p>222</p>
//             </Link>
//           </div>
//         </div>
//       </CardHeader>

//       {/* info */}
//       <CardContent>
//         <CardTitle> {title} </CardTitle>
//         <CardDescription> {des} </CardDescription>
//       </CardContent>
//     </Card>
//   );
// }







"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function PfolioCard({ url, title, category, des }) {
  return (
    <Card className="relative rounded-xl overflow-hidden group dark:border-slate-900 ">
      <CardHeader>
        <CardItem
        translateZ="50"
        >

        <div >
          <Badge className={` mb-3 capitalize text-lg  `}>{category}</Badge>
        </div>
        </CardItem>
        <CardItem
        translateZ="100"
        >

        <div
          className="rounded-lg !inline-flex relative
        overflow-hidden"
        >
          <Image
            src={url}
            alt=""
            height={299}
            width={444}
            className="rounded-lg "
          />
          {/* overlay */}
          <div
            className="absolute top-0 left-0 inset-0 bg-[#fdf3fb]
            dark:bg-background opacity-0 group-hover:opacity-100 
            transition-all duration-200 rounded-lg overflow-hidden"
          ></div>
          {/* icons */}
          <div
            className="flexCenter gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 opacity-0 scale-0 group-hover:scale-100 
            group-hover:opacity-100 transition-all duration-300"
          >
            <Link href={"/portfolio"} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
              <MdOutlineZoomOutMap />
            </Link>
            <Link href={""} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
              <BiSolidLike />
              <p>112</p>
            </Link>
            <Link href={""} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary">
              {" "}
              <FaEye />
              <p>222</p>
            </Link>
          </div>
        </div>
        </CardItem>
      </CardHeader>

      {/* info */}
      <CardContent>
        <CardItem translateZ="60">

        <CardTitle> {title} </CardTitle>
        
        </CardItem>
        <CardItem>

        <CardDescription> {des} </CardDescription>
        </CardItem>
      </CardContent>
    </Card>
  );
}














// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";


// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { MdOutlineZoomOutMap } from "react-icons/md";
// import { BiSolidLike } from "react-icons/bi";
// import { FaEye } from "react-icons/fa6";


// export default function PfolioCard({ url, title, category, des }) {
//   return (
//     <CardContainer className="inter-var relative rounded-xl  group ">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                <div >
//            <Badge className={` mb-3 capitalize text-lg  `}>{category}</Badge>
//          </div>
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             src="/bg.png"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as={Link}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
