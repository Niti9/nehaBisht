import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="
        bold-32 !font-extrabold"
    >

      P.<span className="text-primary">folio </span>
    </Link>
  );
}
