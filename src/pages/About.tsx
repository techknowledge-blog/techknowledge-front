import React from "react";

import ImageAtletasConhecimento from "../assets/images/atletas-conhecimento-02.png";
import founders from "../assets/images/founders-image.png";
import techkknowledgeBoard from "../assets/images/techknowledge-board.png";
import rocketLaunchBottom from "../assets/images/rocket-launch-bottom.png";
import rocketLaunchRight from "../assets/images/rocket-launch-right.png";

export function About() {
  return (
    <div className="px-4 screen-custom:w-[22rem] sm-medium:w-[24rem] md:w-[46rem] lg:w-[62rem]">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center sm:text-3xl dark:text-white text-black">
          Sobre
        </h1>

        <p className="text-center py-4 lg:w-[28rem]">
          Conheça um pouco da história por trás do surgimento do blog
          TechKnowledge.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mt-10 lg:flex-row lg:items-start">
        <div>
          <p className="mb-4">
            O TechKnowledge surgiu com o propósito de ser um espaço dedicado à
            troca de ideias, aprendizado e inspiração no universo da tecnologia.
          </p>

          <p className="mb-4">
            Inicialmente, queríamos compartilhar nossas experiências como
            competidores da Olimpíada do Conhecimento, a seletiva nacional para
            a maior competição de educação profissional do mundo, a WorldSkills,
            e também dividir as lições aprendidas em nossa trajetória como
            desenvolvedores.
          </p>

          <p>
            No entanto, com passar do tempo percebemos que queriamos ir além.
          </p>
        </div>

        <img
          src={ImageAtletasConhecimento}
          className="h-52 object-fill transition-transform duration-300 hover:-rotate-[1.5deg] hover:scale-105 lg:h-80"
          alt=""
        />
      </div>

      <img
        src={rocketLaunchBottom}
        className="h-48 object-cover mt-[-28px] ml-[46px] md:ml-[250px] lg:h-[19.5rem] lg:mt-[-86px] lg:ml-[160px]"
        alt=""
      />

      <div className="flex flex-col items-center gap-6 mt-4 lg:flex-row lg:items-start ">
        <img
          src={founders}
          className="h-52 object-fill transition-transform duration-300 hover:rotate-[1deg] hover:scale-105 lg:h-80"
          alt=""
        />

        <div>
          <p className="mb-4">
            O ano de 2024 marcou um momento especial para o Techknowledge. Foram
            meses de dedicação intensa, pesquisa e muito trabalho para dar um
            novo passo com o blog.
          </p>

          <p className="mb-4">
            Não apenas com uma identidade visual nova, mas com um propósito
            ainda mais claro: oferecer conteúdos relevantes e transformadores
            para a comunidade de desenvolvedores.
          </p>

          <p>
            Assumimos uma nova missão de ser uma fonte acessível, acolhedora e
            prática para quem vive os desafios e conquistas do dia a dia na
            tecnologia.
          </p>
        </div>
      </div>

      <img
        src={rocketLaunchRight}
        className="h-48 object-cover lg:h-[19.5rem] lg:ml-[8rem]"
        alt=""
      />

      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <div>
          <p className="mb-4">
            Nosso blog foi criado para oferecer conteúdos que não apenas
            informam, mas que também capacitam e desafiam desenvolvedores a
            alcançar novos patamares em suas jornadas profissionais.
          </p>

          <p className="mb-4">
            E essa jornada está só começando. Vem com a gente fazer parte.
          </p>
        </div>

        <img
          src={techkknowledgeBoard}
          className="h-52 object-fill transition-transform duration-300 hover:rotate-[1deg] hover:scale-105 lg:h-80"
          alt=""
        />
      </div>
    </div>
  );
}
