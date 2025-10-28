import React from "react";

import TechknowledgeLightLogo from "../../../assets/images/new-logo-lightmode.svg";
import { X } from "@phosphor-icons/react";
import { Link } from "react-router";

interface RouteProps {
  path: string;
  label: string;
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  routes: RouteProps[];
}

export function MenuModal({ isOpen, onClose, routes }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center md:hidden">
      <div className="relative bg-white w-[92%] h-[94vh] rounded-2xl py-5 px-2 shadow-lg border-2 border-white/10 animate-scaleUp">
        <header className="flex items-center justify-between">
          <img
            src={TechknowledgeLightLogo}
            className="h-[38px] object-cover lg:h-14"
            alt=""
          />

          <button
            onClick={onClose}
            className="absolute right-2 top-5 cursor-pointer"
            aria-label="Botão para fechar o menu"
          >
            <span className="inline-flex items-center justify-center w-12 h-9 border border-black/10 rounded-full">
              <X size={24} color="#000000" />
            </span>
          </button>
        </header>

        <ul className="flex flex-col items-start gap-6">
          {routes.map(({ path, label }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={onClose}
                className="text-base text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] dark:after:bg-blue-300 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
