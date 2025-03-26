import React, { useContext } from "react";
import { Navbar } from "../navbar/Navbar";
import techknowledgeLogo from "../../assets/images/techknowledge-logo.svg";

import styles from "./Header.module.css";
import { Link } from "../../../node_modules/react-router/dist/production/index";
import { ThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "@phosphor-icons/react";

export function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="md:flex items-center justify-between pt-6">
      <Link to="/">
        <img
          src={techknowledgeLogo}
          alt="Está escrito o nome Techknowledge na cor branca."
          className={styles["logo"]}
        />
      </Link>

      <Navbar />

      <div className="dark-light-mode md:flex md:items-center gap-2 hidden md:visible">
        <button onClick={toggleDarkMode}>
          {darkMode ? <Moon size={24} /> : <Sun size={24} color="black" />}
        </button>
      </div>
    </header>
  );
}
