import React from "react";
import { Navbar } from "../navbar/Navbar";

import techknowledgeLogo from "../../assets/images/techknowledge-logo.png";

export function Header() {
  let options = ["Home", "Sobre", "Posts", "Comunidade"];

  return (
    <header className="md:flex md:px-10 items-center justify-between gap-32">
      <img
        src={techknowledgeLogo}
        alt="Está escrito o nome Techknowledge na cor branca."
      />

      <Navbar navbarOptions={options} />
    </header>
  );
}
