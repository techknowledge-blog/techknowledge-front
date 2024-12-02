import React from "react";

import { SectionAbout } from "../sections/SectionAbout";
import { SectionCommunity } from "../sections/SectionCommunity";
import { SectionEvents } from "../sections/SectionEvents";
import { SectionLatestPosts } from "../sections/SectionLatestPosts";
import { SectionMain } from "../sections/SectionMain";
import { SectionOurPurpose } from "../sections/SectionOurPurpose";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionOurPurpose />
      <SectionAbout />
      <SectionLatestPosts />
      <SectionEvents />
      <SectionCommunity />
    </>
  );
}
