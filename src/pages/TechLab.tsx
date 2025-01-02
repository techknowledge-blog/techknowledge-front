import React from "react";

import ImageAstronaut from "../assets/images/astronaut.png";

export function TechLab() {
  return (
    <div className="mt-16 w-full">
      <div>
        <p className="bg-[#93C5FD] w-[266px] h-[39px] rounded-full mb-8 flex items-center justify-center text-black font-bold text-lg">
          #Em Breve 2025
        </p>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent text-center lg:text-left md:text-4xl">
            Aguardem Novidades!
          </h2>

          <div>
            <p className="text-2xl font-semibold w-[573px] mb-8">
              Estamos trabalhando para lançar nossa página de TechLab no ano de
              2025.
            </p>

            <p className="text-2xl font-semibold w-[573px]">
              Um espaço onde você encontrará nossos conteúdos, como podcasts,
              vídeos, artigos mais populares e muito mais. Fique de olho 👀 –
              coisas incríveis estão a caminho!"
            </p>

            <p className="mt-8 font-bold text-blue-300">
              #conteúdos #techknowledge #podcast #artigos
            </p>
          </div>
        </div>

        <img src={ImageAstronaut} alt="" className="object-cover h-[380px]" />
      </div>
    </div>
  );
}
