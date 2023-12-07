import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Jnanesh Portfoilio
          </span>
        </a>

        <div className="flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between w-full md:w-[500px] h-full md:mr-20">
  <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-full border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
    <a href="#about-me" className="cursor-pointer md:mr-4 md:mb-0 mb-2">
      About me
    </a>
    <a href="#skills" className="cursor-pointer md:mr-4 md:mb-0 mb-2">
      Skills
    </a>
    <a href="#projects" className="cursor-pointer">
      Projects
    </a>
  </div>
</div>


        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
                   <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"> 
 <Image className="cursor-pointer hover:animate-bounce"
              src={social.src}
              alt={social.name}
              key={social.name}
              width={30}
              height={30}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
