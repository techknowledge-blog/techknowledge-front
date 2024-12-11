import React from "react";
import { CardOurPurpose } from "../components/cardourpurpose/CardOurPurpose";

export function SectionOurPurpose() {
  return (
    <section className="flex flex-col items-center lg:items-start mt-16">
      <h2 className="text-2xl font-bold text-center lg:text-left bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent md:text-4xl">
        Nosso Propósito
      </h2>

      <div className="mt-8 w-full flex justify-center lg:justify-start">
        <CardOurPurpose />
      </div>
    </section>
  );
}
