import React, { useEffect, useState } from "react";

import { useParams } from "../../../../node_modules/react-router/dist/production/index";
import { mockPost } from "../mockPost";
import { MdxProvider } from "./MdxProvider";

export function Post() {
  const { id } = useParams<{ id: string }>();
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  const post = mockPost.find((post) => post.id === id);

  useEffect(() => {
    if (post?.content) {
      post.content().then((module) => setContent(() => module.default));
    }
  }, [post]);

  if (!post) {
    return <p className="text-white text-center">Post não encontrado</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex">
          <div className="mx-4 h-6 w-1 bg-blue-300"></div>
          <p className="font-bold">Maio 03, 2024</p>
        </div>

        <p className="font-bold">0 visualização</p>
      </div>

      <MdxProvider>
        <div className="prose prose-invert max-w-none mt-8">
          <div>
            <h1>{post.title}</h1>
            <p className="font-bold">escrito por: {post.author}</p>
          </div>
          <div>{Content ? <Content /> : <p>Carregando conteúdo...</p>}</div>
        </div>
      </MdxProvider>
    </div>
  );
}
