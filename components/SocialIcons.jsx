import React from 'react'
import Link from 'next/link';

// react icons
import {
  RiWhatsappFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link target="_blank" href={"https://wa.me/525653408970"} className="bg-[#08D9D6] p-2 text-primary text-lg rounded-full hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
        <RiWhatsappFill />
      </Link>
      <Link target="_blank" href={"https://www.instagram.com/westzox"} className="bg-[#F08A5D] p-2 text-primary text-lg rounded-full hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
        <RiInstagramFill />
      </Link>
      <Link target="_blank" href={"https://twitter.com/ArmandoVLZox"} className="bg-[#FF2E63] p-2 text-primary text-lg rounded-full  hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
        <RiTwitterFill />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/armando-villagr%C3%A1n-l%C3%B3pez-9075911b8/"} className="bg-[#EAEAEA] p-2 text-primary text-lg rounded-full  hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
        <RiLinkedinFill />
      </Link>
      <Link target="_blank" href={"https://github.com/iZOXVL"} className="bg-[#5272F2] p-2 text-primary text-lg rounded-full  hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500 ">
        <RiGithubFill />
      </Link>
    </div>
  )
}

export default SocialIcons