import React from "react";
import { Envelope } from "@phosphor-icons/react";

import LeticiaSpeaking from "../assets/images/leticia-speaking.png";
import MikaelSpeaking from "../assets/images/mikael-speaking.png";
import Participants from "../assets/images/participants.png";
import MeetupSergipe from "../assets/images/meetup-sergipe.png";

const contactInfo = [
  {
    name: "Mikael Ribeiro",
    email: "mikaelrsimoes19@gmail.com",
  },
  {
    name: "Leticia Dias",
    email: "contatoleticiadia@gmail.com",
  },
  {
    name: "Techknowledge",
    email: "contatotechknowledge@gmail.com",
  },
];

const eventImages = [
  LeticiaSpeaking,
  MikaelSpeaking,
  Participants,
  MeetupSergipe,
];

export function Contact() {
  return (
    <div className="px-4 screen-custom:w-[22rem] sm-medium:w-[24rem] md:w-[46rem] lg:w-[62rem]">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center sm:text-3xl dark:text-white text-black">
          Contato
        </h1>

        <p className="text-center py-4 lg:w-[28rem]">
          Quer bater um papo com a gente, convidar para um evento ou podcast?
          Estamos por aqui!
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-8 md:mt-16">
        <h2 className="text-2xl font-bold">Nos convide para o seu evento!</h2>

        <p>
          Somos apaixonados por{" "}
          <span className="text-blue-400 font-semibold">tecnologia</span>,{" "}
          <span className="text-blue-400 font-semibold">comunidade</span> e{" "}
          <span className="text-blue-400 font-semibold">educação</span>. Com
          experiência em desenvolvimento web, ensino e eventos, já
          compartilhamos nossos conhecimentos em meetups e podcasts.
        </p>

        <p>
          Se você busca palestrantes engajados para falar sobre{" "}
          <span className="text-blue-400 font-semibold">inovação</span>,{" "}
          <span className="text-blue-400 font-semibold">
            carreira na tecnologia
          </span>
          ,{" "}
          <span className="text-blue-400 font-semibold">
            desenvolvimento web
          </span>{" "}
          e muito mais, estamos prontos para contribuir com o seu evento!
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-bold">Eventos</h2>

        <p>
          Tivemos a incrível oportunidade de palestrar em meetups como o{" "}
          <span className="text-blue-400 font-semibold">
            Meetup Space Squad em Maceió - Alagoas
          </span>{" "}
          e{" "}
          <span className="text-blue-400 font-semibold">Aracaju - Sergipe</span>
          , onde compartilhamos nossos conhecimentos e experiências com a
          comunidade tech.
        </p>

        <p>
          Para nós, foi uma experiência enriquecedora e gratificante,
          fortalecendo nosso compromisso em levar conteúdo de qualidade e
          contribuir para o crescimento da{" "}
          <span className="text-blue-400 font-semibold">comunidade tech</span>.
        </p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-5 mt-8 md:flex-row">
        {eventImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="h-[9rem] md:h-[10rem] lg:h-[14rem] hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-400/10 hover:rounded-full"
          />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Entre em Contato</h2>
        <div className="flex flex-col items-start gap-8 mt-4 md:flex-wrap md:flex-row md:items-center">
          {contactInfo.map(({ name, email }) => (
            <div key={name} className="flex flex-col gap-4">
              <p className="font-bold">{name}</p>
              <div className="flex items-center gap-2">
                <Envelope size={24} color="#8ec5ff" />
                <p>{email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
