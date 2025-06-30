import React from "react";

import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import NewLogo from "../assets/images/techknowledge-logo.svg";

export function SectionMain() {
  return (
    <section className="flex flex-col items-center gap-8 mt-8 lg:flex-row lg:justify-between">
      <div className="w-full md:w-3/4 lg:w-[34rem]">
        <p className="text-2xl leading-9 lg:leading-normal text-center font-semibold md:text-4xl md:leading-[3rem] lg:text-5xl lg:text-left dark:text-white text-[#62748E]">
          Um blog para compartilharmos conhecimento da área da{" "}
          <span className="text-blue-400">tecnologia</span>.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 lg:flex-row">
          <Link to="/about">
            <a
              href="#"
              className="bg-blue-400 text-black py-3 px-6 flex items-center gap-1 justify-center rounded-full font-semibold hover:bg-[#6eadf1]"
            >
              Sobre nós
              <CaretRight size={16} color="#000000" weight="bold" />
            </a>
          </Link>
          <Link to="/community">
            <a
              href="#"
              className="text-blue-400 py-3 px-6 flex items-center justify-center gap-1 font-semibold hover:underline"
            >
              Comunidade
              <CaretRight size={16} color="#8ec5ff" weight="bold" />
            </a>
          </Link>
        </div>
      </div>

      <div className="animate-bounceSoft inline-block relative">
        <img
          src={NewLogo}
          className="block relative z-[2] h-64 md:h-80 lg:h-96"
          alt=""
        />
        <div className="w-[8rem] h-[3rem] lg:w-[13rem] lg:h-[4.032rem] bg-[#00C2FF] opacity-5 rounded-[50%] absolute bottom-[-20px] left-[55%] lg:left-[57%] translate-x-1/2 z-[1] animate-shadowShrink" />
      </div>
    </section>
  );
}
