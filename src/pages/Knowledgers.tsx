import React from "react";

import { CardKnowledger } from "../components/cardknowledger/CardKnowledger";

export function Knowledgers() {
  return (
    <div className="px-4 screen-custom:w-[22rem] sm-medium:w-[24rem] md:w-[46rem] lg:w-[62rem]">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center sm:text-3xl dark:text-white text-black">
          Somos os Knowledgers
        </h1>

        <p className="text-center py-4 lg:w-[28rem]">
          Conhecimento que transforma, vozes que inspiram.
        </p>
      </div>

      <CardKnowledger />
    </div>
  );
}
