import React, { useContext } from "react";

import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import ImageTechnologiesDark from "../assets/images/technologies-darkmode.png";
import ImageTechnologiesLight from "../assets/images/technologies-lightmode.png";

export function SectionMain() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="flex flex-col items-center gap-8 mt-8 lg:flex-row lg:justify-between">
      <div className="w-full md:w-3/4 lg:w-[34rem]">
        <p className="text-2xl leading-9 lg:leading-normal text-center font-semibold md:text-4xl md:leading-[3rem] lg:text-5xl lg:text-left dark:text-white text-[#62748E]">
          Um blog para compartilharmos conhecimento da área da{" "}
          <span className="text-blue-500">tecnologia</span>.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 lg:flex-row">
          <Link to="/about">
            <a
              href="#"
              className="bg-blue-500 text-white py-3 px-6 flex items-center gap-1 justify-center rounded-full font-semibold hover:bg-blue-600"
            >
              Sobre nós
              <CaretRight size={16} color="#ffffff" weight="bold" />
            </a>
          </Link>
          <Link to="/community">
            <a
              href="#"
              className="text-blue-500 py-3 px-6 flex items-center justify-center gap-1 font-semibold hover:underline"
            >
              Comunidade
              <CaretRight size={16} color="#39A0ED" weight="bold" />
            </a>
          </Link>
        </div>
      </div>

      <div>
        {darkMode ? (
          <img
            src={ImageTechnologiesDark}
            className="h-64 md:h-80 lg:h-96 object-cover"
            alt="Tecnologias"
          />
        ) : (
          <img
            src={ImageTechnologiesLight}
            className="h-64 md:h-80 lg:h-96 object-cover"
            alt="Tecnologias"
          />
        )}
      </div>
    </section>
  );
}
