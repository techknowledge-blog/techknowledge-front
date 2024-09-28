import React, { useState } from "react";
import styles from "./Navbar.module.css";

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";

interface NavbarProps {
  navbarOptions: string[];
}

export function Navbar({ navbarOptions }: NavbarProps) {
  let [open, setOpen] = useState(false);

  return (
    <div className={styles["primary-navigation"]}>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-5 cursor-pointer md:hidden"
      >
        <img src={open ? close : menu} alt="" />
      </div>

      <ul
        className={`md:flex md:items-center gap-4 text-xl md:pb-0  
      md:static md:z-auto md:w-auto md:pl-0 transition-all 
      duration-500 ease-in-out ${open ? "visible" : "hidden"}`}
      >
        {navbarOptions.map((options) => (
          <li key={options} className="md:ml-2 md:my-0 my-7">
            <a href="#" className="text-base">
              {options}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
