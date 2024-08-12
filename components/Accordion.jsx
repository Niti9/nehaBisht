"use client";

import { ACCORDIAN } from "@/constants/data";

import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaLock, FaLockOpen } from "react-icons/fa6";

export default function Accordion({ sliceCount }) {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  //slice the ACCORDION data based on the sliceCount prop
  const sliceAccordion = sliceCount
    ? ACCORDIAN.slice(0, sliceCount)
    : ACCORDIAN;

  return (
    <div>
      <div>
        {sliceAccordion.slice({ sliceCount }).map((item, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

const AccordionItem = ({ open, toggle, question, answer }) => {
  return (
    <div>
      <div
        onClick={toggle}
        className="px-3 medium-16 py-2 medium-16 flex
      items-center gap-x-4 cursor-pointer transition-all
      duration-300 mb-2"
      >
       <div> {open ? <FaLockOpen /> : <FaLock />}</div>
        <h4> {question}</h4>
      </div>
      <div className="mb-2">
        <Collapse isOpened={open} >
          <p className="px-6"> {answer} </p>
        </Collapse>
      </div>

    </div>
  );
};
