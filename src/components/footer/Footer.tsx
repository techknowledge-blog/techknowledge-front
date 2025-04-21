import React, { useContext } from "react";

import TechknowledgeMiniLogo from "../../assets/images/techKnowledge-mini-logo.svg";
import TechknowledgeMiniLogoLight from "../../assets/images/techknowledge-minilogo-light.png";
import { ThemeContext } from "../../context/ThemeContext";

export function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-b-4 dark:border-b-[#00C2FF] border-b-blue-500 mt-16 py-4 px-2 sm:flex-row sm:py-6 lg:py-8">
      <div className="flex flex-col items-center sm:flex-row sm:gap-4">
        <p className="text-center sm:text-left">
          © 2025. Todos os direitos reservados ao TechKnowledge.
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
