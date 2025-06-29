import React from "react";
import { CardOurPurpose } from "../components/cardourpurpose/CardOurPurpose";

export function SectionOurPurpose() {
  return (
    <section className="flex flex-col items-center lg:items-start mt-16">
      <h2 className="text-2xl font-bold text-center lg:text-left dark:bg-gradient-to-r dark:from-white dark:to-blue-700 dark:bg-clip-text dark:text-transparent text-blue-500 md:text-4xl">
        Nosso Propósito
      </h2>

      <div className="mt-8 w-full flex justify-center lg:justify-start">
        <CardOurPurpose />
      </div>
    </section>
  );
}
