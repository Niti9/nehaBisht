import React from "react";
import { LINKS } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

export default function Nav({ containerStyles, linkStyles, underlinesStyles }) {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, i) => (
        <Link href={link.path} key={i} className={`${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlinesStyles}`}
            ></motion.span>
          )}
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
