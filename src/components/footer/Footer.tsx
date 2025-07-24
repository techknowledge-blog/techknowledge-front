import React, { useContext } from "react";

import TechknowledgeMiniLogo from "../../assets/images/new-logo-darkmode.svg";
import TechknowledgeMiniLogoLight from "../../assets/images/new-logo-lightmode.svg";
import { ThemeContext } from "../../context/ThemeContext";

export function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full flex items-center justify-center mx-auto">
      <footer className="flex flex-col items-center justify-center gap-6 lg:gap-[200px] border-b-4 dark:border-b-[#00C2FF] border-b-blue-500 mt-16 py-4 px-2 sm:flex-row sm:py-6 lg:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:gap-4">
          <p className="text-center sm:text-left font-medium">
            ©2022 - 2025. Todos os direitos reservados ao Techknowledge.
          </p>
        </div>

        <div>
          {darkMode ? (
            <img
              src={TechknowledgeMiniLogo}
              className="h-9 lg:h-full object-cover"
              alt="TechKnowledge Logo"
            />
          ) : (
            <img
              src={TechknowledgeMiniLogoLight}
              className="h-9 lg:h-full object-cover"
              alt="TechKnowledge Logo"
            />
          )}
        </div>
      </footer>
    </div>
  );
}
