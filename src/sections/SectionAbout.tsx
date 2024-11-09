import React from "react";

import { CaretRight } from "@phosphor-icons/react";

import ImageFounders from "../assets/images/founders.png";

export function SectionAbout() {
  return (
    <section className="flex flex-col items-start mt-16">
      <h3 className="text-2xl font-bold text-white mb-4">Sobre nós</h3>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="min-h-[50vh]">
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

          <div>
            <a
              href="#"
              className="bg-blue-500 w-full lg:w-[15.688rem] h-[3.5rem] flex items-center justify-center gap-1 rounded-full font-semibold hover:bg-blue-600"
            >
              Vem nos conhecer
              <CaretRight size={16} color="#ffffff" weight="bold" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={ImageFounders} className="h-64 md:h-80 lg:h-96" />
        </div>
      </div>
    </section>
  );
}
