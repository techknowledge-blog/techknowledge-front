import React from "react";

import ImageTecnologies from "../assets/images/technologies.png";
import { CaretRight } from "@phosphor-icons/react";

export function SectionMain() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-8 gap-8">
      <div>
        <p className="text-3xl w-[34rem] md:text-5xl font-semibold leading-[2.5rem] md:leading-[3.5rem] text-center lg:text-left">
          Um blog para compartilharmos conhecimento da área da{" "}
          <span className="text-blue-500">tecnologia</span>.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="bg-blue-500 py-3 px-6 flex items-center gap-1 justify-center rounded-full font-semibold hover:bg-blue-600"
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

      <div className="flex justify-center">
        <img
          src={ImageTecnologies}
          className="h-64 md:h-80 lg:h-96"
          alt="Tecnologias"
        />
      </div>
    </section>
  );
}
