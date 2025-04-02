import React, { useContext } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Navbar } from "../navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.css";

import techknowledgeLogoDark from "../../assets/images/techknowledge-logo-darkmode.svg";
import techknowledgeLogoLight from "../../assets/images/techknowledge-logo-lightmode.svg";

export function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="md:flex items-center justify-between pt-6">
      <Link to="/">
        {darkMode ? (
          <img
            src={techknowledgeLogoDark}
            alt="Está escrito o nome Techknowledge na cor branca."
            className={styles["logo"]}
          />
        ) : (
          <img
            src={techknowledgeLogoLight}
            alt="Está escrito o nome Techknowledge na cor preta."
            className={styles["logo"]}
          />
        )}
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
