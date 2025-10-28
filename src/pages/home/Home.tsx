import React from "react";
import { SectionMain } from "./sections/SectionMain";
import { SectionOurPurpose } from "./sections/SectionOurPurpose";
import { SectionFounders } from "./sections/SectionFounders";
import { SectionLatestPosts } from "./sections/SectionLatestPosts";
import { SectionTechLab } from "./sections/SectionTechLab";
import { SectionKnowledgers } from "./sections/SectionKnowledgers";
import { SectionEvents } from "./sections/SectionEvents";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionOurPurpose />
      <SectionFounders />
      <SectionLatestPosts />
      <SectionTechLab />
      <SectionKnowledgers />
      <SectionEvents />
    </>
  );
}
