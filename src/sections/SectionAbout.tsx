import React, { useContext } from "react";

import ImageFoundersDark from "../assets/images/founders-darkmode.png";
import ImageFoundersLight from "../assets/images/founders-lightmode.png";

import { Button } from "../components/button/Button";
import { ThemeContext } from "../context/ThemeContext";

export function SectionAbout() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="flex flex-col items-center lg:items-start mt-16">
      <div className="w-full lg:w-auto">
        <h2 className="text-2xl font-bold mb-4 dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:bg-clip-text dark:text-transparent text-blue-500 text-center lg:text-left md:text-4xl">
          Fundadores
        </h2>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-24">
        <div className="flex flex-col gap-3 lg:gap-16 text-center lg:text-left w-full md:w-1/2 lg:w-[20rem]">
          <div className="flex flex-col gap-6">
            <p className="font-medium leading-relaxed w-[20rem] mx-auto md:w-full dark:text-white text-[#62748E]">
              Fala galera! Somos o Mikael e a Leticia, os criadores do blog
              TechKnowledge. Gostariamos de compartilhar com vocês um pouco da
              nossa jornada.
            </p>

            <p className="font-medium leading-relaxed w-[20rem] mx-auto md:w-full dark:text-white text-[#62748E]">
              Vem conhecer um pouco sobre nós e como chegamos no universo da
              tecnologia.
            </p>
          </div>

          <div className="w-2/3 sm:w-3/5 mx-auto lg:mx-0 mb-4">
            <Button label="Conhecer fundadores" href="/about" />
          </div>
        </div>

        <div className="flex justify-center">
          {darkMode ? (
            <img
              src={ImageFoundersDark}
              className="h-56 md:h-80 lg:h-96"
              alt="Fundadores"
            />
          ) : (
            <img
              src={ImageFoundersLight}
              className="h-56 md:h-80 lg:h-96"
              alt="Fundadores"
            />
          )}
        </div>
      </div>
    </section>
  );
}
