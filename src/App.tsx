import React from "react";
import { Footer } from "./components/footer/Footer";

import { Header } from "./components/header/Header";
import { SectionAbout } from "./sections/SectionAbout";
import { SectionCommunity } from "./sections/SectionCommunity";
import { SectionEvents } from "./sections/SectionEvents";
import { SectionLatestPosts } from "./sections/SectionLatestPosts";
import { SectionMain } from "./sections/SectionMain";
import { SectionOurPurpose } from "./sections/SectionOurPurpose";

import "./global.css";

export function App() {
  return (
    <div className="flex flex-col mx-auto px-4 max-w-5xl min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col items-center">
        <SectionMain />
        <SectionOurPurpose />
        <SectionAbout />
        <SectionLatestPosts />
        <SectionEvents />
        <SectionCommunity />
      </main>

      <Footer />
    </div>
  );
}
