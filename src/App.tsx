import React from "react";

import { Header } from "./components/header/Header";
import { SectionAbout } from "./sections/SectionAbout";
import { SectionMain } from "./sections/SectionMain";

export function App() {
  return (
    <div className="flex flex-col mx-auto p-4 max-w-5xl">
      <Header />

      <main className="flex flex-col items-center">
        <SectionMain />
        <SectionAbout />
      </main>
    </div>
  );
}
