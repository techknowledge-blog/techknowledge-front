import React from "react";
import { Navbar } from "../navbar/Navbar";

import buttonLightMode from "../../assets/icons/buttonLightMode.svg";
import LightIcon from "../../assets/icons/light-icon-mode.svg";
import techknowledgeLogo from "../../assets/images/techknowledge-logo.png";

import styles from "./Header.module.css";

export function Header() {
  let options = ["Sobre", "Posts", "Projetos", "Comunidade"];

  return (
    <header className="md:flex items-center justify-around pt-6 px-4">
      <img
        src={techknowledgeLogo}
        alt="Está escrito o nome Techknowledge na cor branca."
        className={styles["logo"]}
      />

      <Navbar navbarOptions={options} />

      <div className="dark-light-mode md:flex md:items-center gap-2 hidden md:visible">
        <img
          src={buttonLightMode}
          alt="Botão para ativar o modo claro e escuro da página"
        />
        <img src={LightIcon} alt="Icone no formato de um sol." />
      </div>
    </header>
  );
}
