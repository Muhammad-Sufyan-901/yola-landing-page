import React from "react";
import { navigation } from "../constant/data";

function Nav() {
  return (
    <nav className="ml-[70px]">
      <ul className="flex gap-x-[42px]">
        {navigation.map(({ name, href }, index) => (
          <li key={index}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
