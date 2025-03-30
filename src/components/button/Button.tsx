import React from "react";
import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
