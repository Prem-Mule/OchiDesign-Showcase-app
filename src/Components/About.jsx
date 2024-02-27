/* eslint-disable no-unused-vars */
import React from "react";
const About = () => {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full p-[5vw] bg-[#CDEA68] rounded-tl-xl rounded-tr-xl"
    >
      <h1 className="font-['Neue_Montreal'] text-[4.2vw] text-zinc-900 leading-[4.5vw] tracking-tight w-[90%]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full mt-[4vw] border-t-[1px] border-[#738146] flex pt-[4vw] ">
        <div className="w-1/2 h-[70vh]">
          <h1 className="text-[4vw] text-zinc-900 tracking-tighter">
            Our approach:
          </h1>
          <button className="mt-[1vw] px-10 py-5 rounded-full bg-black text-white flex justify-between items-center">
            Read More
            <div className="rounded-full bg-white w-[0.7vw] h-[0.7vw] ml-[2vw]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-black rounded-3xl overflow-hidden">
          <img
            src="src\assets\images\Homepage.jpg"
            alt="agency"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
