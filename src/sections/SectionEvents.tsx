import React from "react";

import ImageEvent from "../assets/images/events.png";
import { Button } from "../components/button/Button";

export function SectionEvents() {
  return (
    <section className="flex flex-col gap-8 mt-16 md:flex-col lg:flex-row lg:gap-16 lg:items-center lg:justify-center">
      <div className="flex flex-col gap-4 w-full items-center text-center md:w-full lg:w-1/2 lg:items-start lg:text-left">
        <h2 className="text-2xl font-bold leading-9 lg:leading-normal bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent w-full md:text-4xl lg:w-[24rem]">
          Nos convide para o seu evento!
        </h2>

        <div>
          <div className="mt-4">
            <p className="leading-relaxed w-[20rem] md:w-[70%] mx-auto lg:w-[30.5rem]">
              Tem um evento de tecnologia chegando? Estamos prontos para
              compartilhar conhecimento, inspirar pessoas e discutir nossas
              experiências no mercado! Adoramos contribuir com conteúdos
              relevantes e experiências práticas.
            </p>

            <p className="leading-relaxed w-[20rem] md:w-[70%] mx-auto mt-4 lg:w-[30.5rem]">
              Convide-nos para palestrar no seu evento e fazer parte dessa troca
              de ideias. Será um prazer colaborar com a sua comunidade!
            </p>
          </div>

          <div className="w-2/3 sm:w-1/3 mx-auto lg:mx-0">
            <Button label="Saiba Mais" href="" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center lg:w-1/2">
        <img
          src={ImageEvent}
          className="h-80 md:h-[34rem] lg:h-96 object-cover"
          alt="Evento"
        />
      </div>
    </section>
  );
}
