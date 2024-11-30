import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "../../../node_modules/@phosphor-icons/react/dist/index";

import TechknowledgeMiniLogo from "../../assets/images/techKnowledge-mini-logo.svg";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-b-4 border-b-[#00C2FF] mt-16">
      <div className="flex mb-8">
        <div className="flex gap-4">
          <InstagramLogo size={24} />
          <XLogo size={24} />
          <LinkedinLogo size={24} />
          <GithubLogo size={24} />
        </div>

        <div className="mx-4 h-6 w-1 bg-blue-300"></div>

        <p>© 2022. Todos os direitos reservados ao TechKnowledge.</p>
      </div>
      <div className="mb-8">
        <img src={TechknowledgeMiniLogo} className="h-6" alt="" />
      </div>
    </footer>
  );
}
