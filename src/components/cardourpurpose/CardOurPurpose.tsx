import React from "react";
import { Handshake, Lightbulb, MapPinLine } from "@phosphor-icons/react";

import { cards } from "./mockDataCard";

export function CardOurPurpose() {
  const icons = [MapPinLine, Handshake, Lightbulb];

  return (
    <div className="flex flex-wrap justify-center gap-6 lg:gap-14">
      {cards.map((card, index) => {
        const Icon = icons[index];
        return (
          <div
            key={index}
            className={`w-full sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[17.25rem] h-auto p-4 flex flex-col gap-4 items-center lg:items-start ${card.style}`}
          >
            <Icon
              size={32}
              weight="bold"
              className={
                card.style.includes("text-black")
                  ? "text-black"
                  : "text-blue-300"
              }
            />
            <h3
              className={`text-lg font-bold text-center lg:text-left ${
                card.style.includes("text-black") ? "text-black" : "text-white"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm text-center lg:text-left ${
                card.style.includes("text-black") ? "text-black" : "text-white"
              }`}
            >
              {card.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
