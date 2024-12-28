import React from "react";

import { Button } from "../components/button/Button";

import ImageCommunity from "../assets/images/community.png";

export function SectionCommunity() {
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center gap-8">
        <p className="text-xl font-bold text-center leading-7 lg:leading-normal w-full px-4 md:text-3xl md:w-[44.563rem]">
          Acreditamos no poder que a{" "}
          <span className="text-blue-500">comunidade</span> tem de mudar vidas.
          Vem fazer parte da nossa comunidade!
        </p>

        <img
          src={ImageCommunity}
          className="h-48 w-auto md:h-[28rem]"
          alt="Comunidade"
        />

        <div className="w-2/3 sm:w-1/3 mx-auto lg:mx-0">
          <Button label="Entrar na comunidade" href="/community" />
        </div>
      </div>
    </section>
  );
}
