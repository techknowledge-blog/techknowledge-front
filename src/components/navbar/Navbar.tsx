import React, { useContext, useState } from "react";

import CloseDark from "../../assets/icons/close.svg";
import MenuHamburgerDark from "../../assets/icons/menu.svg";
import CloseLight from "../../assets/icons/close-light.svg";
import MenuHamburgerLight from "../../assets/images/menu-hamburger-lightmode.png";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const routes = [
    { path: "/", label: "" },
    { path: "/about", label: "Sobre" },
    { path: "/posts", label: "Posts" },
    { path: "/techlab", label: "TechLab" },
    { path: "/community", label: "Comunidade" },
  ];

  return (
    <div className="pl-3 md:pl-0">
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-7 cursor-pointer md:hidden"
      >
        {darkMode ? (
          <img src={open ? CloseDark : MenuHamburgerDark} alt="Menu" />
        ) : (
          <img
            src={open ? CloseLight : MenuHamburgerLight}
            alt="Menu"
            className="object-cover"
          />
        )}
      </div>
      <ul
        className={`md:flex md:items-center gap-4 text-xl md:pb-0  
  md:static md:z-auto md:w-auto md:pl-0 transition-all 
  duration-500 ease-in-out ${open ? "visible" : "hidden"}`}
      >
        {routes.map(({ path, label }) => (
          <li key={path} className="relative md:ml-2 md:my-0 my-7">
            <Link
              to={path}
              className="text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] dark:after:bg-blue-300 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
