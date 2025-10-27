import React from "react";

import { PostPreview } from "../components/ui/posts/postpreview/PostPreview";
import { Button } from "../components/ui/button/Button";

export function SectionLatestPosts() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center lg:items-start">
      <h2 className="text-2xl font-bold leading-9 lg:leading-normal mb-8 dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:bg-clip-text dark:text-transparent w-full text-center text-blue-500 md:text-4xl lg:text-left lg:w-[24rem]">
        Artigos Recentes
      </h2>

      <PostPreview />

      <div className="w-[15rem] sm:w-1/3 md:w-60 mx-auto lg:mx-0">
        <Button label="Ver todos os artigos" href="/posts" />
      </div>
    </section>
  );
}
