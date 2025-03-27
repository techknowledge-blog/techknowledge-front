import React, { useContext } from "react";

import ImageFrameVideo from "../assets/images/frame-video.png";
import ImageLogoTechKnowledge from "../assets/images/techknowledge-logo.png";
import ImageLogoTechknowledgeLight from "../assets/images/logo-large-light.png";
import ImageMikaelAbout from "../assets/images/mikael-about.png";
import ImageMikaelAboutLight from "../assets/images/mikael-about-light.png";
import ImageLeticiaAbout from "../assets/images/leticia-about.png";
import ImageLeticiaAboutLight from "../assets/images/leticia-about-light.png";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "../../node_modules/@phosphor-icons/react/dist/index";

import { ThemeContext } from "../context/ThemeContext";

export function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full px-4">
      <div className="mt-16 flex flex-col items-center w-full">
        <h1 className="text-2xl font-bold text-center sm:text-3xl dark:text-white text-black">
          Sobre
        </h1>

        <div className="bg-[#93C5FD] w-full h-[424px] mt-8 flex flex-col items-center rounded">
          <p className="mt-8 w-64 text-lg font-bold text-center text-black sm:w-96 sm:text-xl">
            Vem conhecer um pouco da história por trás do surgimento do blog
            TechKnowledge.
          </p>
          <img
            src={ImageFrameVideo}
            alt=""
            className="h-[280px] mt-6 sm:h-[380px] object-cover"
          />
        </div>
      </div>

      <div className="mt-16 sm:mt-28 flex flex-col items-center lg:items-start">
        {darkMode ? (
          <img
            src={ImageLogoTechKnowledge}
            alt="Logo TechKnowledge"
            className="ml-[-8px] w-40 sm:w-48 object-cover"
          />
        ) : (
          <img
            src={ImageLogoTechknowledgeLight}
            alt="Logo TechKnowledge"
            className="ml-[-8px] w-40 sm:w-48 object-cover"
          />
        )}

        <div>
          <p className="text-sm mb-4 sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
            O TechKnowledge surgiu com o propósito de ser um espaço dedicado à
            troca de ideias, aprendizado e inspiração no universo da tecnologia.
          </p>

          <p className="text-sm mb-4 sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
            Inicialmente, queríamos compartilhar nossas experiências como
            competidores da{" "}
            <span className="relative group cursor-pointer text-blue-500 underline">
              Olimpíada do Conhecimento
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 dark:bg-gray-800 bg-[#93C5FD] dark:text-white text-black text-xs rounded-lg shadow-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 sm:w-72 sm:text-sm">
                A Olimpíada do Conhecimento é a seletiva nacional para a maior
                competição de educação profissional do mundo, a WorldSkills. É
                uma oportunidade de demonstrar habilidades e buscar excelência
                na profissão.
              </span>
            </span>
            , e também dividir as lições aprendidas em nossa trajetória como
            desenvolvedores.
          </p>

          <p className="text-sm mb-4 sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
            Hoje, nosso blog vai além. Criamos conteúdos que não apenas
            informam, mas também capacitam e desafiam desenvolvedores a alcançar
            novos objetivos em suas jornadas profissionais. Somos movidos pela
            paixão por tecnologia e acreditamos no aprendizado contínuo, sempre
            explorando e descobrindo algo novo.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 dark:bg-gradient-to-r dark:from-white dark:to-blue-300 dark:bg-clip-text dark:text-transparent text-blue-500 text-center sm:text-2xl lg:text-4xl lg:text-start">
          Fundadores
        </h2>

        <div className="flex flex-col items-center gap-6 mt-8 lg:flex-row">
          <div>
            {darkMode ? (
              <img
                src={ImageMikaelAbout}
                alt="Mikael Ribeiro"
                className="h-[200px] sm:h-[260px] mx-auto lg:mx-0"
              />
            ) : (
              <img
                src={ImageMikaelAboutLight}
                alt="Mikael Ribeiro"
                className="h-[200px] sm:h-[260px] mx-auto lg:mx-0"
              />
            )}
          </div>

          <div className="lg:w-2/3 flex flex-col items-center justify-center lg:items-start">
            <p className="font-bold text-xl sm:text-2xl text-center lg:text-start dark:text-white text-black">
              Mikael Ribeiro
            </p>
            <p className="mt-4 text-sm sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
              Eae! Meu nome é Mikael Ribeiro, também conhecido como "Mikkaiser".
              Co-fundei o blog TechKnowledge com minha amiga Leticia Dias e
              iniciei minha carreira como desenvolvedor de software em 2021.
            </p>
            <p className="mt-4 text-sm sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
              Atualmente, sou professor de tecnologia da informação nos Emirados
              Árabes. Minha missão é capacitar a próxima geração de
              profissionais de software com as habilidades e o conhecimento
              necessários para se destacarem no cenário global.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/mikkaiser_/" target="_blank">
                <InstagramLogo size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mikael-ribeiro/"
                target="_blank"
              >
                <LinkedinLogo size={24} />
              </a>
              <a href="https://github.com/Mikkaiser" target="_blank">
                <GithubLogo size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-8 lg:flex-row">
          <div>
            {darkMode ? (
              <img
                src={ImageLeticiaAbout}
                alt="Leticia Dias"
                className="h-[200px] sm:h-[260px] mx-auto lg:mx-0"
              />
            ) : (
              <img
                src={ImageLeticiaAboutLight}
                alt="Leticia Dias"
                className="h-[200px] sm:h-[260px] mx-auto lg:mx-0"
              />
            )}
          </div>

          <div className="lg:w-2/3 flex flex-col items-center justify-center lg:items-start">
            <p className="font-bold text-xl sm:text-2xl text-center dark:text-white text-black">
              Leticia Dias
            </p>
            <p className="mt-4 text-sm sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
              Olá, meu nome é Leticia Dias. Sou fundadora do blog TechKnowledge
              junto com meu amigo Mikael Ribeiro. Iniciei minha carreira como
              desenvolvedora full stack em 2022.
            </p>
            <p className="mt-4 text-sm sm:text-base text-center lg:text-start dark:text-white text-[#62748E]">
              Atualmente, trabalho como desenvolvedora full stack. Recentemente,
              atuei como desenvolvedora frontend react em um projeto e,
              anteriormente, fui professora no curso técnico de informática para
              internet, onde tinha como missão preparar os alunos para o mercado
              de trabalho.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/leticiadias.dev/"
                target="_blank"
              >
                <InstagramLogo size={24} />
              </a>

              <a href="https://x.com/leticiadiasdev" target="_blank">
                <XLogo size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/leticia-dia/"
                target="_blank"
              >
                <LinkedinLogo size={24} />
              </a>

              <a href="https://github.com/leticiadia" target="_blank">
                <GithubLogo size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
