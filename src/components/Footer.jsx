import React from "react";
import { footer } from "../constant/data";
import { images } from "../constant/Images";

const { Logo } = images;

function Footer() {
  return (
    <footer className="pb-[70px]" data-aos="fade-up" data-aos-offset="0">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          <a href="/#">
            <img src={Logo} alt="Logo Pics" />
          </a>
          <p className="text-[#73777B] text-sm">&copy; Yola 2022. All Right Reserved.</p>
          <div className="flex gap-x-4 text-orange text-lg">
            {footer.map(({ Icon, href }, index) => (
              <a href={href} key={index} className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary hover:text-paragraph transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
