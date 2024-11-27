import React from "react";

import { CaretRight } from "@phosphor-icons/react";

import ImageFounders from "../assets/images/founders.png";
import { Button } from "../components/button/Button";

export function SectionAbout() {
  return (
    <section className="flex flex-col items-start mt-16">
      <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
        Sobre nós
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="min-h-[48vh]">
            <p className="w-full lg:w-[20rem] mb-4 font-medium">
              Fala galera! Somos o Mikael e a Leticia, os criadores do blog
              TechKnowledge. Gostariamos de compartilhar com vocês um pouco da
              nossa jornada.
            </p>

            <p className="w-full lg:w-[20rem] mb-4 font-medium">
              Vem conhecer um pouco sobre nós e como chegamos no universo da
              tecnologia.
            </p>
          </div>

          <Button label="Vem nos conhecer" href="" />
        </div>

        <div className="flex justify-center">
          <img src={ImageFounders} className="h-64 md:h-80 lg:h-96" />
        </div>
      </div>
    </section>
  );
}
