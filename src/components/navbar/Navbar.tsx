import React, { useState } from "react";
import styles from "./Navbar.module.css";

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";

import buttonLightMode from "../../assets/icons/buttonLightMode.svg";
import LightIcon from "../../assets/icons/light-icon-mode.svg";

interface NavbarProps {
  navbarOptions: string[];
}

export function Navbar({ navbarOptions }: NavbarProps) {
  let [open, setOpen] = useState(false);

  return (
    <div className={styles["primary-navigation"]}>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-9 cursor-pointer md:hidden"
      >
        <img src={open ? close : menu} alt="" />
      </div>

      <ul
        className={`md:flex md:items-center gap-10 text-xl md:pb-0  
      md:static md:z-auto md:w-auto md:pl-0 transition-all 
      duration-500 ease-in-out ${open ? "visible" : "hidden"}`}
      >
        {navbarOptions.map((options) => (
          <li key={options} className="md:ml-2 md:my-0 my-7">
            <a href="#">{options}</a>
          </li>
        ))}

        <div className="dark-light-mode flex items-center gap-2">
          <img
            src={buttonLightMode}
            alt="Botão para ativar o modo claro e escuro da página"
          />
          <img src={LightIcon} alt="Icone no formato de um sol." />
        </div>
      </ul>
    </div>
  );
}
