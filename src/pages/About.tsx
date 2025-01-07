import React from "react";

import ImageFrameVideo from "../assets/images/frame-video.png";
import ImageLogoTechKnowledge from "../assets/images/techknowledge-logo.png";
import ImageMikaelAbout from "../assets/images/mikael-about.png";
import ImageLeticiaAbout from "../assets/images/leticia-about.png";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "../../node_modules/@phosphor-icons/react/dist/index";

export function About() {
  return (
    <div className="w-full">
      <div className="mt-8 flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold text-center">Sobre</h1>

        <div className="bg-[#93C5FD] w-full h-[424px] mt-8 flex flex-col items-center rounded">
          <p className="mt-8 w-[20rem] text-xl font-bold md:w-[38rem] text-center text-black">
            Vem conhecer um pouco da história por trás do surgimento do blog
            TechKnowledge.
          </p>

          <img src={ImageFrameVideo} alt="" className="h-[380px] mt-8" />
        </div>
      </div>

      <div className="mt-28">
        <img src={ImageLogoTechKnowledge} alt="" className="ml-[-8px]" />

        <div>
          <p className="text-base mb-4">
            O TechKnowledge surgiu com o propósito de ser um espaço dedicado à
            troca de ideias, aprendizado e inspiração no universo da tecnologia.
          </p>

          <p className="text-base mb-4">
            Inicialmente, queríamos compartilhar nossas experiências como
            competidores da{" "}
            <span className="relative group cursor-pointer text-blue-500 underline">
              Olimpíada do Conhecimento
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-gray-800 text-white text-sm rounded-lg shadow-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                A Olimpíada do Conhecimento é a seletiva nacional para a maior
                competição de educação profissional do mundo, a WorldSkills. É
                uma oportunidade de demonstrar habilidades e buscar excelência
                na profissão.
              </span>
            </span>
            , e também dividir as lições aprendidas em nossa trajetória como
            desenvolvedores.
          </p>

          <p className="text-base mb-4">
            Hoje, nosso blog vai além. Criamos conteúdos que não apenas
            informam, mas também capacitam e desafiam desenvolvedores a alcançar
            novos objetivos em suas jornadas profissionais. Somos movidos pela
            paixão por tecnologia e acreditamos no aprendizado contínuo, sempre
            explorando e descobrindo algo novo.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent text-center lg:text-left md:text-4xl">
          Fundadores
        </h2>

        <div className="flex gap-6 mt-8">
          <div>
            <img src={ImageMikaelAbout} alt="" className="h-[260px]" />
          </div>

          <div>
            <div>
              <p className="font-bold text-2xl">Mikael Ribeiro</p>
              <p className="w-[708px] mt-4">
                Eae! Meu nome é Mikael Ribeiro, também conhecido como
                "Mikkaiser". Co-fundei o blog TechKnowledge com minha amiga
                Leticia Dias e iniciei minha carreira como desenvolvedor de
                software em 2021.
              </p>

              <p className="w-[708px] mt-4">
                Atualmente, sou professor de tecnologia da informação nos
                Emirados Árabes. Minha missão é capacitar a próxima geração de
                profissionais de software com as habilidades e o conhecimento
                necessários para se destacarem no cenário global.
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <InstagramLogo size={24} />

              <XLogo size={24} />

              <LinkedinLogo size={24} />

              <GithubLogo size={24} />
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <div>
            <img src={ImageLeticiaAbout} alt="" className="h-[260px]" />
          </div>

          <div>
            <div>
              <p className="font-bold text-2xl">Leticia Dias</p>
              <p className="w-[708px] mt-4">
                Olá, meu nome é Leticia Dias. Sou fundadora do blog
                TechKnowledge junto com meu amigo Mikael Ribeiro. Iniciei minha
                carreira como desenvolvedora full stack em 2022.
              </p>

              <p className="w-[708px] mt-4">
                Atualmente, trabalho como desenvolvedora full stack.
                Recentemente, atuei como desenvolvedora frontend react em um
                projeto e, anteriormente, fui professora no curso técnico de
                informática para internet, onde tinha como missão preparar os
                alunos para o mercado de trabalho.
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <InstagramLogo size={24} />

              <XLogo size={24} />

              <LinkedinLogo size={24} />

              <GithubLogo size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
