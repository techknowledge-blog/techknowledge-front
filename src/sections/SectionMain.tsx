import React from "react";

import ImageTecnologies from "../assets/images/technologies.png";
import { CaretRight } from "@phosphor-icons/react";

export function SectionMain() {
  return (
    <section className="flex flex-col items-center gap-8 mt-8 lg:flex-row lg:justify-between">
      <div className="w-full md:w-3/4 lg:w-[34rem]">
        <p className="text-2xl leading-[2.5rem] text-center font-semibold md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] lg:text-left">
          Um blog para compartilharmos conhecimento da área da{" "}
          <span className="text-blue-500">tecnologia</span>.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 lg:flex-row">
          <a
            href="#"
            className="bg-blue-500 text-white py-3 px-6 flex items-center gap-1 justify-center rounded-full font-semibold hover:bg-blue-600"
          >
            Sobre nós
            <CaretRight size={16} color="#ffffff" weight="bold" />
          </a>
          <a
            href="#"
            className="text-blue-500 py-3 px-6 flex items-center justify-center gap-1 font-semibold hover:underline"
          >
            Comunidade
            <CaretRight size={16} color="#39A0ED" weight="bold" />
          </a>
        </div>
      </div>

      <div>
        <img
          src={ImageTecnologies}
          className="h-64 md:h-80 lg:h-96"
          alt="Tecnologias"
        />
      </div>
    </section>
  );
}
