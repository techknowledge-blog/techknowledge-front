import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";

import { ThemeContext } from "../../../context/ThemeContext";
import { MenuModal } from "../../ui/menuModal/menuModal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const routes = [
    { path: "/", label: "" },
    { path: "/about", label: "Sobre" },
    { path: "/posts", label: "Posts" },
    { path: "/techlab", label: "TechLab" },
    { path: "/knowledgers", label: "Knowledgers" },
  ];

  return (
    <nav>
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-8 cursor-pointer md:hidden"
      >
        {darkMode ? (
          <span className="inline-flex items-center justify-center w-12 h-9 border border-white/10 rounded-full">
            <List
              size={24}
              color="#ffffff"
              className={`transition-all duration-300 ${
                open
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-12 h-9 border border-black/10 rounded-full">
            <List size={24} color="#000000" />
          </span>
        )}
      </button>

      <ul className="hidden md:flex md:items-center gap-4 text-xl">
        {routes.map(({ path, label }) => (
          <li key={label} className="relative md:ml-2 md:my-0 my-7">
            <Link
              to={path}
              className="text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] dark:after:bg-blue-300 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <MenuModal isOpen={open} onClose={() => setOpen(false)} routes={routes} />
    </nav>
  );
}
