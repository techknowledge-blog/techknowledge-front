import React from "react";

import { SectionFounders } from "../sections/SectionFounders";
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
      <SectionFounders />
      <SectionLatestPosts />
      <SectionTechLab />
      <SectionKnowledgers />
      <SectionEvents />
    </>
  );
}
