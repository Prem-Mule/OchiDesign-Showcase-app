/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-[50vw] px-[5vw] py-[6.5vw]  flex font-['FoundersGrotesk']">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="uppercase text-[8.8vw] leading-[8vw]">Eye-</h1>
          <h1 className="uppercase text-[8.8vw] leading-[8vw]">Opening</h1>
        </div>
        <h1 className="text-[2.4vw]">Ochi.</h1>
      </div>
      <div className="w-1/2 overflow-hidden">
        <div className="heading">
          <h1 className="uppercase text-[8.8vw] leading-[8vw] ">
            Presentations
          </h1>
        </div>
        <div className="links text-[1.7vw] mt-[2vw]">
          <a className="block underline" href="">
            Facebook
          </a>
          <a className="block underline" href="">
            Instagram
          </a>
          <a className="block underline" href="">
            Twitter
          </a>
        </div>
        <div className="links2 flex w-full h-full leading-[3vw] py-[3vw] text-[1.4vw]">
          <div className="w-1/2">
            <a className="block underline" href="">
              202-1965 W 4th Ave Vancouver,
            </a>
            <a className="block underline" href="">
              Canada 30
            </a>
            <a className="block underline" href="">
              Chukarina St Lviv,
            </a>
            <a className="block underline" href="">
              Ukraine
            </a>
          </div>

          <div className="w-1/2 leading-[2.5vw]">
            <a className="block underline" href="">
              Home
            </a>
            <a className="block underline" href="">
              Services
            </a>
            <a className="block underline" href="">
              Our Work
            </a>
            <a className="block underline" href="">
              About Us
            </a>
            <a className="block underline" href="">
              Insights
            </a>
            <a className="block underline" href="">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
