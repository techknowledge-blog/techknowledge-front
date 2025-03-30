import React from "react";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../../services/postsService";
import ReactMarkdown from "react-markdown";

interface PostProps {
  id: number;
  title: string;
  author: {
    name: string;
  };
  content: string;
  slug: string;
  createdAt: string;
}

export function Post() {
  const [post, setPost] = useState<PostProps>();

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.substring(path.lastIndexOf("/") + 1);

    async function loadPost() {
      const post = await getPostBySlug(slug);
      setPost(post);
    }

    loadPost();
  }, []);

  if (!post) {
    return <div>carregando...</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="prose prose-invert max-w-none mt-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white text-black">
          {post.title}
        </h1>
        <p className="font-bold text-sm sm:text-base dark:text-white text-[#62748E]">
          escrito por: {post.author.name}
        </p>
        <div className="mt-6">
          <ReactMarkdown className="prose dark:prose-invert prose-h1:text-black dark:prose-h1:text-white max-w-none">
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
