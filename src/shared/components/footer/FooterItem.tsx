"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const FooterItem = ({
  header,
  item1,
  item2,
  item3,
  href1,
  href2,
  href3,
}: {
  header: string;
  item1: string;
  item2: string;
  item3: string;
  href1: string;
  href2: string;
  href3: string;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-3  "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h5 className="font-montserrat font-normal md:font-medium text-xl  md:text-2xl text-white opacity-90  ">
        {header}
      </h5>
      <div className="flex flex-col gap-2  ">
        <Link
          className="font-roboto text-lg md:text-xl text-white  "
          href={href1}
        >
          {item1}
        </Link>
        <Link
          href={href2}
          className="font-roboto text-lg md:text-xl text-white  "
        >
          {item2}
        </Link>
        <Link
          href={href3}
          className="font-roboto text-lg md:text-xl text-white  "
        >
          {item3}
        </Link>
      </div>
    </motion.div>
  );
};

export default FooterItem;
