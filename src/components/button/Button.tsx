import React from "react";
import { CaretRight } from "../../../node_modules/@phosphor-icons/react/dist/index";
import { Link } from "../../../node_modules/react-router/dist/production/index";

interface ButtonProps {
  label: string;
  href: string;
}

export function Button({ label, href }: ButtonProps) {
  return (
    <Link
      to={href}
      className="bg-blue-500 w-full lg:w-[15rem] h-[3rem] flex items-center justify-center gap-1 rounded-full font-semibold text-white hover:bg-blue-600 mt-10"
    >
      {label}
      <CaretRight size={16} color="#ffffff" weight="bold" />
    </Link>
  );
}
