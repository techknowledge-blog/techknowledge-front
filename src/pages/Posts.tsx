import React from "react";
import { PostList } from "../components/ui/posts/postlist/PostList";

export function Posts() {
  return (
    <div className="mt-16 flex flex-col items-center md:w-[44rem] lg:w-[60rem]">
      <h1 className="text-3xl font-bold dark:text-white text-black">Posts</h1>
      <p className="mt-4 w-[20rem] md:w-[38rem] text-center dark:text-white text-[#62748E]">
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
