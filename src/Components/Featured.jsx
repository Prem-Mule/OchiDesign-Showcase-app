/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [isHovering, setisHovering] = useState([false, false, false, false]);
  return (
    <div className="w-full py-[3vw]">
      <div className="w-full px-[5vw] border-b-2 border-zinc-700 pb-[1vw]">
        <h1 className="text-[4vw] font-['NeueMontreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-[5.3vw] ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1 w-1/2 h-[36vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400  overflow-hidden"
            >
              <img
                src="https://github.com/Prem-Mule/OchiDesign-Showcase-app/blob/629241ed2b80145fa26d2242a3bf25acdbea7db0/src/assets/images/card1.png?raw=true"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-1/2 h-[36vw] relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg bg-green-400  overflow-hidden"
            >
              <img
                src="https://github.com/Prem-Mule/OchiDesign-Showcase-app/blob/629241ed2b80145fa26d2242a3bf25acdbea7db0/src/assets/images/card2.jpg?raw=true"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering([false, false, true, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer3 w-1/2 h-[36vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
              {"STYLE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[2] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400  overflow-hidden"
            >
              <img
                src="https://github.com/Prem-Mule/OchiDesign-Showcase-app/blob/629241ed2b80145fa26d2242a3bf25acdbea7db0/src/assets/images/card3.jpg?raw=true"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering([false, false, false, true]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer4 w-1/2 h-[36vw] relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
              {"BRAND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[3] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg bg-green-400  overflow-hidden"
            >
              <img
                src="https://github.com/Prem-Mule/OchiDesign-Showcase-app/blob/629241ed2b80145fa26d2242a3bf25acdbea7db0/src/assets/images/card4.jpg?raw=true"
                alt="card1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
