import React from "react";
import {
  Handshake,
  Lightbulb,
  MapPinLine,
} from "../../../node_modules/@phosphor-icons/react/dist/index";

import { cards } from "./mockDataCard";

export function CardOurPurpose() {
  const icons = [MapPinLine, Handshake, Lightbulb];

  return (
    <div className="flex items-center gap-14">
      {cards.map((card, index) => {
        const Icon = icons[index];
        return (
          <div
            key={index}
            className={`w-[17.25rem] h-[15.688rem] p-4 flex flex-col gap-4 ${card.style}`}
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
              className={`text-lg font-bold ${
                card.style.includes("text-black") ? "text-black" : "text-white"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm ${
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
