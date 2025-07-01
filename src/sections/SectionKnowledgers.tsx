import React from "react";
import { Button } from "../components/button/Button";

import knowledgersImage from "../assets/images/knowledgers.png";

export function SectionKnowledgers() {
  return (
    <section className="mt-16 flex flex-col items-start justify-center gap-6 lg:flex-row">
      <div>
        <h2 className="text-2xl font-bold leading-9 lg:leading-normal mb-4 dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:bg-clip-text dark:text-transparent w-full text-center text-blue-500 md:text-4xl lg:text-left lg:w-[24rem]">
          Knowledgers
        </h2>

        <div className="w-[21rem] lg:w-[32rem] lg:mb-20">
          <p className="text-center mb-4 lg:text-left">
            Os Knowledgers são criadores de conteúdo sobre tecnologia, que
            compartilham conhecimento com propósito e autenticidade.
          </p>

          <p className="text-center mb-4 lg:text-left">
            Aqui, reunimos vozes que inspiram, ensinam e transformam. Pessoas
            que compartilham suas experiências para impactar outras jornadas.
          </p>
        </div>

        <div className="w-2/3 sm:w-1/3 md:w-60 mx-auto lg:mx-0">
          <Button label="Vem nos conhecer" href="/knowledgers" />
        </div>
      </div>

      <div>
        <img
          src={knowledgersImage}
          className="h-80 lg:h-96"
          alt="knowledgers"
        />
      </div>
    </section>
  );
}
