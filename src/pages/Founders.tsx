import React from "react";

import FounderLeticia from "../assets/images/founder-leticia.png";
import FounderMikael from "../assets/images/founder-mikael.png";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const founderData = [
  {
    name: "Leticia Dias",
    image: FounderLeticia,
    paragraphs: [
      "Minha jornada na tecnologia começou ainda no ensino médio, quando entrei em uma escola técnica e tive meu primeiro contato com programação. Foi ali que descobri minha paixão pela área. Pouco tempo depois, me tornei competidora da Olimpíada do Conhecimento, representando a ocupação de Tecnologias Web.",
      "Sempre fui movida pela vontade de contribuir, e isso me levou a atuar como instrutora de informática, abraçando a missão de preparar estudantes para o mercado de trabalho.",
      "Fui embaixadora do Space Squad da Rocketseat, onde tive a oportunidade de colaborar ativamente com a comunidade tech, ajudando as pessoas da comunidade tech a evoluírem em suas jornadas.",
      <>
        Hoje, sigo minha trajetória como desenvolvedora full stack , mas com
        foco em frontend e design, utilizando tecnologias como:{" "}
        <span className="text-blue-400 font-semibold">
          react, tailwindcss, typescript, nestjs e postgresql
        </span>
        .
      </>,
    ],
    social: [
      { icon: GithubLogo, url: "https://github.com/leticiadia" },
      { icon: InstagramLogo, url: "https://instagram.com/leticiadias.dev" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leticia-dia/" },
      { icon: XLogo, url: "https://x.com/leticiadiasdev" },
    ],
  },

  {
    name: "Mikael Ribeiro",
    image: FounderMikael,
    paragraphs: [
      <>
        Nascido em Maceió, Alagoas, desde cedo me encantei por transformar
        ideias em código. Aos 23 anos, moro em Abu Dhabi há quase dois anos,
        atuando como{" "}
        <span className="text-blue-400 font-semibold">
          Software Solutions Expert, com foco em C# e .NET para backend robusto
        </span>
        .
      </>,
      "Na área da educação, preparo e ensino alunos nessas tecnologias, treinando-os para competirem e representarem os Emirados Árabes Unidos em competições internacionais, como a WorldSkills International Competition.",
      <>
        Meu dia a dia envolve{" "}
        <span className="text-blue-400 font-semibold">
          compartilhar boas práticas com GIT, arquitetura de software e
          desenvolvimento empresarial
        </span>
        .
      </>,
      "Sou movido pela curiosidade, pela paixão por tecnologia e pelo desejo de formar a próxima geração de desenvolvedores.",
      "Do Nordeste brasileiro ao polo de inovação do Oriente Médio, minha trajetória envolve técnica, dedicação e resiliência e o melhor de tudo é que isso está apenas no início.",
    ],
    social: [
      { icon: GithubLogo, url: "https://github.com/Mikkaiser" },
      { icon: InstagramLogo, url: "https://instagram.com/mikkaiser_" },
      {
        icon: LinkedinLogo,
        url: "https://www.linkedin.com/in/mikael-ribeiro/",
      },
    ],
  },
];

export function Founders() {
  return (
    <div className="px-4 screen-custom:w-[22rem] sm-medium:w-[24rem] md:w-[46rem] lg:w-[62rem]">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center sm:text-3xl dark:text-white text-black">
          Fundadores
        </h1>

        <p className="text-center py-4 lg:w-[28rem]">
          Um pouco da tragetória dos fundadores do Techknowledge.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-16 lg:mt-16">
        {founderData.map((founder, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              className={`flex flex-col items-center gap-8 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col gap-2 w-full lg:w-[40rem]">
                <h3 className="text-2xl font-bold lg:text-4xl">
                  {founder.name}
                </h3>
                {founder.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col items-center gap-8">
                <img
                  src={founder.image}
                  className="transition-transform duration-300 hover:rotate-[1.5deg] hover:scale-105"
                  alt=""
                />

                <div className="flex items-center gap-4">
                  {founder.social.map(({ icon: Icon, url }, index: number) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      className="hover:text-blue-400"
                    >
                      <Icon key={index} size={32} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
