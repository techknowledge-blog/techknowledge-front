import React from "react";

import ImageAstronaut from "../assets/images/astronaut.png";

export function Community() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center lg:justify-start w-full">
        <p className="bg-[#93C5FD] w-[16rem] h-[2.5rem] rounded-full mb-8 flex items-center justify-center text-black font-bold text-lg">
          #Em Breve 2025
        </p>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between w-full max-w-screen-lg">
        <div className="text-center lg:text-left lg:mr-8 flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent md:text-2xl lg:text-4xl">
            Aguardem Novidades!
          </h2>

          <div>
            <p className="text-base font-semibold mb-4 max-w-md md:text-lg lg:text-2xl lg:max-w-[573px]">
              Estamos trabalhando para lançar nossa página de Comunidade no
              próximo ano.
            </p>

            <p className="text-base font-semibold max-w-md md:text-lg lg:text-2xl lg:max-w-[573px]">
              Um espaço feito para troca de ideias, networking e colaboração
              entre apaixonados por tecnologia. Fique de olho 👀 – coisas
              incríveis estão a caminho!
            </p>

            <p className="mt-8 font-bold text-blue-300">
              #community #techknowledge #networking
            </p>
          </div>
        </div>
        <img
          src={ImageAstronaut}
          alt="Astronauta"
          className="mt-8 object-cover h-[200px] md:h-[300px] lg:mt-0 lg:h-[380px]"
        />
      </div>
    </div>
  );
}
