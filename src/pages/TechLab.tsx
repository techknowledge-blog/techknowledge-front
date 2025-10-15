import React, { useContext } from "react";

import ImageAstronautDark from "../assets/images/astronaut.png";
import ImageAstronautLight from "../assets/images/astronaut-lightmode.png";

import { ThemeContext } from "../context/ThemeContext";

export function TechLab() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen lg:w-[60rem] px-4">
      <div className="flex items-center justify-center lg:justify-start w-full mt-10 md:mt-0">
        <p className="bg-[#93C5FD] w-[16rem] h-[2.5rem] rounded-full mb-8 flex items-center justify-center text-black font-bold text-lg">
          #Em Breve 2026
        </p>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between w-full max-w-screen-lg">
        <div className="text-center lg:text-left lg:mr-8 flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-bold mb-8 dark:bg-gradient-to-r dark:from-white dark:to-blue-300 dark:bg-clip-text dark:text-transparent text-blue-500 md:text-2xl lg:text-4xl">
            Aguardem Novidades!
          </h2>

          <div>
            <p className="text-base font-semibold mb-4 max-w-md md:text-lg lg:text-2xl lg:max-w-[573px] dark:text-white text-[#62748E]">
              Estamos trabalhando para lançar nossa página de TechLab em 2026.
            </p>

            <p className="text-base font-semibold max-w-md md:text-lg lg:text-2xl lg:max-w-[573px] dark:text-white text-[#62748E]">
              Um espaço onde você encontrará nossos conteúdos, como podcasts,
              vídeos, artigos mais populares e muito mais. Fique de olho 👀 –
              coisas incríveis estão a caminho!
            </p>

            <p className="mt-8 font-bold dark:text-blue-300 text-blue-500">
              #conteúdostech #techknowledge #comunidade #devs
            </p>
          </div>
        </div>
        {darkMode ? (
          <img
            src={ImageAstronautDark}
            alt="Astronauta"
            className="mt-8 object-cover h-[200px] md:h-[300px] lg:mt-0 lg:h-[380px]"
          />
        ) : (
          <img
            src={ImageAstronautLight}
            alt="Astronauta"
            className="mt-8 object-cover h-[200px] md:h-[300px] lg:mt-0 lg:h-[380px]"
          />
        )}
      </div>
    </div>
  );
}
