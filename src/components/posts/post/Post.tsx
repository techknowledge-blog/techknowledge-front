import React from "react";
import ExampleMdx from "../post/Post1.mdx";

import { useParams } from "../../../../node_modules/react-router/dist/production/index";
import { mockPost } from "../mockPost";
import { MdxProvider } from "./MdxProvider";

export function Post() {
  const { id } = useParams<{ id: string }>();

  const post = mockPost.find((post) => post.id === id);

  if (!post) {
    return <p className="text-white text-center">Post não encontrado</p>;
  }

  return (
    <div>
      <MdxProvider>
        <div className="prose prose-invert max-w-none mt-8">
          <ExampleMdx />
        </div>
      </MdxProvider>
    </div>
  );
}
