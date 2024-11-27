import React from "react";

import { Button } from "../components/button/Button";

import ImageCommunity from "../assets/images/community.png";

export function SectionCommunity() {
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-3xl w-[44.563rem] text-center">
          Acreditamos no poder que a{" "}
          <span className="text-blue-500">comunidade</span> tem de mudar vidas.
          Vem fazer parte da nossa comunidade!
        </p>

        <img src={ImageCommunity} className="h-[28rem]" alt="" />

        <Button label="Entrar na comunidade" href="" />
      </div>
    </section>
  );
}
