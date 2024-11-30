import React from "react";

import { PostPreview } from "../components/posts/postpreview/PostPreview";
import { mockPost } from "../components/posts/postpreview/mockPost";
import { Button } from "../components/button/Button";

export function SectionLatestPosts() {
  return (
    <section className="mt-16">
      <h3 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent w-full text-center lg:text-left">
        Artigos publicados recentes
      </h3>

      <div className="flex flex-wrap items-start gap-8 mt-12 justify-center lg:justify-start">
        {mockPost.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>

      <div className="w-2/3 sm:w-1/3 mx-auto lg:mx-0">
        <Button label="Ver todos os artigos" href="" />
      </div>
    </section>
  );
}
