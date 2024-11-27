import React from "react";
import { CardOurPurpose } from "../components/cardourpurpose/CardOurPurpose";

export function SectionOurPurpose() {
  return (
    <section className="flex flex-col items-start mt-16">
      <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
        Nosso Propósito
      </h2>

      <div className="mt-8">
        <CardOurPurpose />
      </div>
    </section>
  );
}
