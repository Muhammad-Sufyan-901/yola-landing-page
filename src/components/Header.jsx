import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { images } from "../constant/Images";

const { Logo } = images;

function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header className={`${header ? "top-0" : "top-9"} fixed w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 bg-white flex items-center justify-between`}>
      <div className="flex items-center">
        <a href="/#">
          <img src={Logo} alt="Logo Pics" />
        </a>

        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">Sign In</button>
          <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition">Sign Up</button>
        </div>
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;
