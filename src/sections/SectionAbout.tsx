import React from "react";

import ImageFounders from "../assets/images/founders.png";
import { Button } from "../components/button/Button";

export function SectionAbout() {
  return (
    <section className="flex flex-col items-center lg:items-start mt-16">
      <div className="w-full lg:w-auto">
        <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent text-center lg:text-left md:text-4xl">
          Sobre nós
        </h2>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="text-center lg:text-left w-full md:w-1/2 lg:w-[20rem]">
          <div className="min-h-[10vh] lg:min-h-[42vh]">
            <p className="mb-4 font-medium w-[20rem] mx-auto md:w-full">
              Fala galera! Somos o Mikael e a Leticia, os criadores do blog
              TechKnowledge. Gostariamos de compartilhar com vocês um pouco da
              nossa jornada.
            </p>

            <p className="mb-4 font-medium w-[20rem] mx-auto md:w-full">
              Vem conhecer um pouco sobre nós e como chegamos no universo da
              tecnologia.
            </p>
          </div>

          <div className="w-2/3 sm:w-3/5 mx-auto lg:mx-0">
            <Button label="Vem nos conhecer" href="" />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={ImageFounders}
            className="h-56 md:h-80 lg:h-96"
            alt="Fundadores"
          />
        </div>
      </div>
    </section>
  );
}
