import Link from "next/link";

import { HiArrowDown } from "react-icons/hi";
import Image from 'next/image'


const Header = () => {
  return (
    <header className="padding-container max-container flex gap-4 flexBetween py-1">
      {/* logo */}
      <Link href={"/"} className="bold-28 text-white">
      <Image
      src="/navlogo.png"
      width={80}
      height={80}
      alt="Picture of the author"
    />
      </Link>
      {/* button */}
      
      <a target="_blank" href="/cv.pdf">
        <button className="btn_dark_rounded px-8 py-2 rounded-full flexCenter gap-2">
          <span>Descargar CV</span>
          <span className=" h-5 w-5 rounded-full flexCenter animate-bounce">
            <HiArrowDown />
          </span>
        </button>
      </a>
    </header>
  );
};

export default Header;


