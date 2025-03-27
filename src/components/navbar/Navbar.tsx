import React, { useState } from "react";
import styles from "./Navbar.module.css";

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import { Link } from "../../../node_modules/react-router/dist/production/index";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", label: "" },
    { path: "/about", label: "Sobre" },
    { path: "/posts", label: "Posts" },
    { path: "/techlab", label: "TechLab" },
    { path: "/community", label: "Comunidade" },
  ];

  return (
    <div className={styles["primary-navigation"]}>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-7 cursor-pointer md:hidden"
      >
        <img src={open ? close : menu} alt="Menu" />
      </div>
      <ul
        className={`md:flex md:items-center gap-4 text-xl md:pb-0  
      md:static md:z-auto md:w-auto md:pl-0 transition-all 
      duration-500 ease-in-out ${open ? "visible" : "hidden"}`}
      >
        {routes.map(({ path, label }) => (
          <li key={path} className="md:ml-2 md:my-0 my-7">
            <Link to={path} className="text-base">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
