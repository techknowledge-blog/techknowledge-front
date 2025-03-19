import React from "react";
import { Envelope } from "@phosphor-icons/react";

import Image from "../assets/images/atletas-conhecimento.png";
import ImageEvent from "../assets/images/palestra.png";

const ContactInfo = ({ name, email }: { name: string; email: string }) => (
  <div>
    <p className="font-bold mb-4">{name}</p>
    <div className="flex items-center gap-2">
      <Envelope size={24} className="text-blue-500" />
      <p>{email}</p>
    </div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="my-10">
    <h3 className="text-2xl font-bold mb-8">{title}</h3>
    {children}
  </section>
);

export function Contact() {
  return (
    <div className="w-full px-4 mx-auto">
      <h1 className="text-2xl font-bold text-center sm:text-3xl mt-16">
        Contato
      </h1>

      <Section title="">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex flex-col justify-between min-h-full">
            <h3 className="text-2xl font-bold mb-6 self-stretch">
              Nos convide para o seu evento!
            </h3>
            <div>
              <p className="mb-6 max-w-lg">
                Somos apaixonados por tecnologia, comunidade e educação. Com
                experiência em desenvolvimento web, ensino e eventos, já
                compartilhamos nossos conhecimentos em meetups e podcasts.
              </p>
              <p className="mb-6 max-w-lg">
                Se você busca palestrantes engajados para falar sobre inovação,
                carreira na tecnologia, desenvolvimento web e muito mais,
                estamos prontos para contribuir com o seu evento!
              </p>
              <p className="font-bold">
                📩 Entre em contato e vamos conversar!
              </p>
            </div>
          </div>

          <img
            src={Image}
            alt="Palestrantes em evento de tecnologia"
            className="w-96 h-auto"
          />
        </div>
      </Section>

      <Section title="Eventos">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div>
            <p className="mb-6 max-w-lg">
              Tivemos a incrível oportunidade de palestrar em meetups como o{" "}
              <strong>Meetup Space Squad em Maceió - Alagoas</strong> e{" "}
              <strong>Aracaju - Sergipe</strong>, onde compartilhamos nossos
              conhecimentos e experiências com a comunidade tech.
            </p>
            <p className="mb-6 max-w-lg">
              Para nós, foi uma experiência enriquecedora e gratificante,
              fortalecendo nosso compromisso em levar conteúdo de qualidade e
              contribuir para o crescimento do ecossistema tecnológico.
            </p>
          </div>
          <img
            src={ImageEvent}
            alt="Evento de tecnologia"
            className="w-96 h-auto"
          />
        </div>
      </Section>

      <Section title="Entre em Contato">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <ContactInfo
            name="Mikael Ribeiro"
            email="mikaelrsimoes19@gmail.com"
          />
          <ContactInfo
            name="Leticia Dias"
            email="contatoleticiadia@gmail.com"
          />
        </div>
      </Section>
    </div>
  );
}
