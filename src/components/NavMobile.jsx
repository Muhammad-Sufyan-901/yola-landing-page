import React, { useState } from "react";
import { navigation } from "../constant/data";
import { icons } from "../constant/Icons";

const { BiMenu } = icons;

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BiMenu className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden" />
      </div>

      <ul className={`${isOpen ? "max-h-60 p-8" : "max-h-0 p-0"} flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden transition-all`}>
        {navigation.map(({ name, href }, index) => (
          <li key={index}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMobile;
