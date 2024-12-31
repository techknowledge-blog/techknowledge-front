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
            competidores da Olimpíada do Conhecimento, a seletiva nacional para
            a maior competição de educação profissional do mundo, a WorldSkills,
            e também dividir as lições aprendidas em nossa trajetória como
            desenvolvedores.
          </p>

          <p className="text-base mb-4">
            Nosso blog foi criado para oferecer conteúdos que não apenas
            informam, mas que também capacitam e desafiam desenvolvedores a
            alcançar novos patamares em suas jornadas profissionais.
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
                I currently work on systems and websites development at SENAI -
                AL, where I also had the opportunity to be a competitor in the
                Worldskills 2022 National Selection, winning the 3rd place medal
                in the occupation of Web Technologies.
              </p>

              <p className="w-[708px] mt-4">
                I currently work on systems and websites development at SENAI -
                AL, where I also had the opportunity to be a competitor in the
                Worldskills 2022 National Selection, winning the 3rd place medal
                in the occupation of Web Technologies.
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
                I currently work on systems and websites development at SENAI -
                AL, where I also had the opportunity to be a competitor in the
                Worldskills 2022 National Selection, winning the 3rd place medal
                in the occupation of Web Technologies.
              </p>

              <p className="w-[708px] mt-4">
                I currently work on systems and websites development at SENAI -
                AL, where I also had the opportunity to be a competitor in the
                Worldskills 2022 National Selection, winning the 3rd place medal
                in the occupation of Web Technologies.
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
