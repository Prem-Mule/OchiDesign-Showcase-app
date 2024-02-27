/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setrotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.6"
        className="w-full h-full relative bg-[url('./images/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center"
      >
        <div className="absolute  h-[18vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center gap-[4vw]">
          <div className=" w-[18vw]  rounded-full bg-zinc-100 flex justify-center items-center">
            <div className=" w-[10vw] h-[10vw]   rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className=" w-[3vw] h-[3vw]   rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[18vw]  rounded-full bg-zinc-100 flex justify-center items-center">
            <div className="w-[10vw] h-[10vw]   rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className=" w-[3vw] h-[3vw]   rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
