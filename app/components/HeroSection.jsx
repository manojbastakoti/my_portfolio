import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Hello, I'm Manoj Bastakoti
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am writing to express my strong interest in the internship
            opportunity at AusNep IT Solutions, as advertised on Facebook Group.
            As a recent graduate with a Bachelor Of Engineering in Information
            Technology(IT engineer) and a passion for web development, I am
            excited to contribute my strong knowledge of React Or Node.js to
            your team.
          </p>
          <div>
            <button className="rounded-full px-6 py-3 mr-4 w-full sm:w-fit mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Hire Me
            </button>
            <button className="rounded-full px-6 py-3 w-full sm:w-fit bg-transparent hover:bg-slate-800 border border-white text-white">
              Download CV
            </button>
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
