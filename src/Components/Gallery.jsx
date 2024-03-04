/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-[40vw] flex gap-[2vw] px-[5vw] mt-[10vw]">
      <div className="cardcontainer  w-1/2 h-[25vw] ">
        <div className="card relative w-full h-full bg-[#5d811f] rounded-lg flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 font-['Neue_Montreal'] font-medium border-2 rounded-full px-[1vw]">
            2023-24
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5  w-1/2 h-[25vw] ">
        <div className="card w-1/2 h-full relative bg-[#0e1108] rounded-lg flex items-center justify-center">
          <img src="src\images\logo002.svg" alt="" />
          <button className="absolute left-10 bottom-10 font-['Neue_Montreal'] font-medium border-[1px] rounded-full px-[1vw]">
            2023-24
          </button>
        </div>
        <div className="card w-1/2 h-full relative bg-[#212121] rounded-lg flex items-center justify-center ">
          <img src="src\images\logo003.png" alt="" className="scale-[60%]"/>
          <button className="absolute left-10 bottom-10 font-['Neue_Montreal'] font-medium  border-[1px] rounded-full px-[1vw]">
            2023-24
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
