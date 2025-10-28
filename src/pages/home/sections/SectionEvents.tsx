import React from "react";

import { Button } from "../../../components/ui/button/Button";

import rocketImage from "../../../assets/images/rocket.svg";

export function SectionEvents() {
  return (
    <section className="flex flex-col gap-8 mt-8 md:flex-col lg:flex-row lg:gap-16 lg:items-center lg:justify-center">
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <img src={rocketImage} alt="" />

        <h2 className="text-center text-2xl font-bold leading-9 lg:leading-normal dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:bg-clip-text dark:text-transparent text-blue-500 w-[15rem] md:w-[22rem] md:text-4xl lg:w-[24rem]">
          Nos convide para o seu evento!
        </h2>

        <div>
          <div className="mt-4">
            <p className="leading-relaxed w-[19rem] screen-custom:w-[22rem] md:w-[38rem] mx-auto lg:w-[40rem] dark:text-white text-[#62748E]">
              Tem um evento de tecnologia chegando? Estamos prontos para
              compartilhar conhecimento, inspirar pessoas e discutir nossas
              experiências no mercado! Adoramos contribuir com conteúdos
              relevantes e experiências práticas.
            </p>

            <p className="leading-relaxed w-[19rem] screen-custom:w-[22rem] md:w-[70%] mx-auto mt-4 lg:w-[38.5rem] dark:text-white text-[#62748E]">
              Convide-nos para palestrar no seu evento e fazer parte dessa troca
              de ideias. Será um prazer colaborar com a sua comunidade!
            </p>
          </div>
        </div>

        <div className="w-[15rem] sm:w-1/3 md:w-60 lg:ml-[-32px]">
          <Button label="Saiba Mais" href="/contact" />
        </div>
      </div>
    </section>
  );
}
