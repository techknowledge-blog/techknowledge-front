import React from "react";
import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router";
import TechLabImage from "../assets/images/techknowledge-techlab.png";

export function SectionTechLab() {
  return (
    <div className="bg-blue-400 w-full flex flex-col items-center gap-6 mt-10 pt-8 lg:flex-row lg:items-start lg:justify-center">
      <div className="max-w-[24rem] text-center lg:max-w-[28rem] lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Vem conferir nosso <span>catálogo</span> de conteúdos no TechLab.
        </h2>

        <p className="mt-4 text-black">
          Por lá, você encontra artigos, vídeos, dicas práticas e experiências
          reais sobre tecnologia e carreira. Tudo feito por quem vive o dia a
          dia da área tech.
        </p>

        <Link to="/techlab">
          <a className="flex items-center justify-center gap-2 w-60 h-12 bg-black hover:bg-[#1A1A1A] rounded-full font-medium mt-8 mx-auto lg:mx-0">
            Ver Catálogo <CaretRight size={16} color="#ffffff" weight="bold" />
          </a>
        </Link>
      </div>

      <div>
        <img
          src={TechLabImage}
          alt="TechLab"
          className="h-60 lg:h-80 object-cover"
        />
      </div>
    </div>
  );
}
