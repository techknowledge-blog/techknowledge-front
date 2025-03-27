import React, { useContext } from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

import TechknowledgeMiniLogo from "../../assets/images/techKnowledge-mini-logo.svg";
import TechknowledgeMiniLogoLight from "../../assets/images/techknowledge-minilogo-light.png";
import { ThemeContext } from "../../context/ThemeContext";

export function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-b-4 dark:border-b-[#00C2FF] border-b-blue-500 mt-16 p-4 sm:flex-row sm:py-6 lg:py-8">
      <div className="flex flex-col items-center sm:flex-row sm:gap-4">
        <div className="flex gap-6 mb-4 sm:mb-0">
          <InstagramLogo size={24} />

          <XLogo size={24} />

          <LinkedinLogo size={24} />

          <GithubLogo size={24} />
        </div>

        <div className="hidden sm:block sm:mx-4 sm:h-6 sm:w-1 dark:bg-blue-300 bg-blue-500"></div>

        <p className="text-center sm:text-left">
          © 2022. Todos os direitos reservados ao TechKnowledge.
        </p>
      </div>

      <div>
        {darkMode ? (
          <img
            src={TechknowledgeMiniLogo}
            className="h-6"
            alt="TechKnowledge Logo"
          />
        ) : (
          <img
            src={TechknowledgeMiniLogoLight}
            className="h-9 object-cover"
            alt="TechKnowledge Logo"
          />
        )}
      </div>
    </footer>
  );
}
