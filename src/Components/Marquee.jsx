/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="w-full min-h-[25vw] py-12 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className=" text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw]  leading-none uppercase font-['Test_Founders_Grotesk_X_Condensed']  mr-[2vw] "
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw]  leading-none uppercase font-['Test_Founders_Grotesk_X_Condensed']   "
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
