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
    <Card className="relative rounded-xl overflow-hidden group">
      <CardHeader>
        <div >
          <Badge className={` mb-3 capitalize text-lg  `}>{category}</Badge>
        </div>
        <div
          className="rounded-lg !inline-flex relative
        overflow-hidden"
        >
          <Image
            src={url}
            alt=""
            height={299}
            width={444}
            className="rounded-lg"
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
      </CardHeader>

      {/* info */}
      <CardContent>
        <CardTitle> {title} </CardTitle>
        <CardDescription> {des} </CardDescription>
      </CardContent>
    </Card>
  );
}







// "use client";
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
//     <Card className="relative rounded-xl overflow-hidden group dark:border-slate-900  mx-4 sm:mx-0">
//       <CardHeader>
//         <CardItem
//         // translateZ="50"
//         >

//         <div >
//           <Badge className={` mb-3 capitalize text-lg  `}>{category}</Badge>
//         </div>
//         </CardItem>
//         <CardItem
//         translateZ="100"
//         >

//         <div
//           className="rounded-lg !inline-flex relative
//         overflow-hidden"
//         >
//           <Image
//             src={url}
//             alt=""
//             height={299}
//             width={444}
//             className="rounded-lg "
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
//         </CardItem>
//       </CardHeader>

//       {/* info */}
//       <CardContent>
//         <CardItem translateZ="60">

//         <CardTitle> {title} </CardTitle>
        
//         </CardItem>
//         <CardItem>

//         <CardDescription> {des} </CardDescription>
//         </CardItem>
//       </CardContent>
//     </Card>
//   );
// }










