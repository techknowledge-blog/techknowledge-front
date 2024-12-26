import React from "react";

import { PostPreview } from "../components/posts/postpreview/PostPreview";
import { mockPost } from "../components/posts/mockPost";
import { Button } from "../components/button/Button";

export function SectionLatestPosts() {
  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold leading-9 lg:leading-normal mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent w-full text-center md:text-4xl lg:text-left lg:w-[24rem]">
        Artigos publicados recentes
      </h3>

      <PostPreview posts={mockPost} />

      <div className="w-2/3 sm:w-1/3 mx-auto lg:mx-0">
        <Button label="Ver todos os artigos" href="/posts" />
      </div>
    </section>
  );
}
