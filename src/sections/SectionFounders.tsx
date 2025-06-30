import React, { useContext } from "react";

import ImageFoundersDark from "../assets/images/founders-darkmode.png";
import ImageFoundersLight from "../assets/images/founders-lightmode.png";

import { Button } from "../components/button/Button";
import { ThemeContext } from "../context/ThemeContext";

export function SectionFounders() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="flex flex-col items-center mt-16 gap-8 lg:flex-row lg:items-start ">
      <div>
        <h2 className="text-2xl font-bold mb-4 dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:bg-clip-text dark:text-transparent text-blue-500 text-center lg:text-left md:text-4xl">
          Fundadores
        </h2>

        <div className="flex flex-col gap-6 w-[16rem] md:w-[26rem] lg:w-[26rem]">
          <p className="font-medium leading-relaxed text-center lg:text-left dark:text-white text-[#62748E]">
            Fala galera! Somos o Mikael e a Leticia, os criadores do blog
            TechKnowledge. Gostariamos de compartilhar com vocês um pouco da
            nossa jornada.
          </p>

          <p className="font-medium leading-relaxed text-center lg:text-left dark:text-white text-[#62748E]">
            Vem conhecer um pouco sobre nós e como chegamos no universo da
            tecnologia.
          </p>
        </div>

        <div className="w-full sm:w-1/3 md:w-60 mx-auto lg:mx-0">
          <Button label="Conhecer fundadores" href="/about" />
        </div>
      </div>

      <div className="flex justify-center">
        {darkMode ? (
          <img
            src={ImageFoundersDark}
            className="h-56 md:h-[360px]"
            alt="Fundadores"
          />
        ) : (
          <img
            src={ImageFoundersLight}
            className="h-56 md:h-[360px]"
            alt="Fundadores"
          />
        )}
      </div>
    </section>
  );
}
