"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Manoj Bastakoti", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hey there! I'm a full stack developer who loves building all aspects
            of web applications. From creating user-friendly interfaces to
            handling the behind-the-scenes magic, I've got it covered. I enjoy
            finding solutions that make websites work smoothly and look great.
            Let's create some digital magic together!
          </p>
          <div>
            <button className="rounded-full px-6 py-3 mr-4 w-full sm:w-fit mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Hire Me
            </button>
            <a href="/My_Cv.pdf" download="cv">
              <button className="rounded-full px-1 py-1 w-full sm:w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
                <span className="bg-[#121212] hover:bg-slate-800 block rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/image/portprofil1.gif"
              className=" absolute transform  translate-y-7 lg:translate-x-12 lg:translate-y-24 "
              width={400}
              height={400}
              alt="portfolio image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
