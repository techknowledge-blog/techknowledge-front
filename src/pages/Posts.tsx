import React from "react";
import { PostList } from "../components/posts/postlist/PostList";

export function Posts() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Posts</h1>
      <p className="mt-4 w-[20rem] md:w-[38rem] text-center">
        Aqui você pode conferir nossos conteúdos sobre desenvolvimento web,
        mobile, carreira, design, metodologias ágeis e muito mais desse universo
        que engloba a tecnologia.
      </p>

      <div className="mt-8">
        <PostList />
      </div>
    </div>
  );
}
