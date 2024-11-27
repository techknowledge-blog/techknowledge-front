import React from "react";

import ImageEvent from "../assets/images/events.png";
import { Button } from "../components/button/Button";

export function SectionEvents() {
  return (
    <section className="flex flex-start justify-center gap-16 mt-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent w-[24rem]">
          Nos convide para o seu evento!
        </h2>

        <div>
          <div className="min-h-[32vh]">
            <p className="w-[30.5rem]">
              Tem um evento de tecnologia chegando? Estamos prontos para
              compartilhar conhecimento, inspirar pessoas e discutir nossas
              experiências no mercado! Adoramos contribuir com conteúdos
              relevantes e experiências práticas.
            </p>

            <p className="w-[30.5rem] mt-2">
              Convide-nos para palestrar no seu evento e fazer parte dessa troca
              de ideias. Será um prazer colaborar com a sua comunidade!
            </p>
          </div>

          <Button label="Saiba Mais" href="" />
        </div>
      </div>

      <div>
        <img src={ImageEvent} className="h-80 md:h-80 lg:h-96" />
      </div>
    </section>
  );
}
