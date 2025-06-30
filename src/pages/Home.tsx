import React from "react";

import { SectionAbout } from "../sections/SectionAbout";
import { SectionEvents } from "../sections/SectionEvents";
import { SectionLatestPosts } from "../sections/SectionLatestPosts";
import { SectionMain } from "../sections/SectionMain";
import { SectionOurPurpose } from "../sections/SectionOurPurpose";
import { SectionTechLab } from "../sections/SectionTechLab";
import { SectionKnowledgers } from "../sections/SectionKnowledgers";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionOurPurpose />
      <SectionAbout />
      <SectionLatestPosts />
      <SectionTechLab />
      <SectionKnowledgers />
      <SectionEvents />
    </>
  );
}
