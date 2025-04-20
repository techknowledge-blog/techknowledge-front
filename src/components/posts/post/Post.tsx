import React from "react";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../../services/postsService";
import ReactMarkdown from "react-markdown";
import { formatDateToCustomFormat } from "../../../utils/formatDate";

import ImageLeticiaAuthor from "../../../assets/images/leticia.jpeg";
import ImageMikaelAuthor from "../../../assets/images/mikael.jpeg";
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
    <div className="px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex items-center">
        <div className="h-6 w-1 dark:bg-blue-300 bg-blue-500 mr-4"></div>
        <p className="font-bold text-sm sm:text-base dark:text-white text-[#62748E]">
          {formatDateToCustomFormat(post.createdAt)}
        </p>
      </div>

      <div className="prose prose-invert max-w-none mt-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white text-black mb-0">
          {post.title}
        </h1>

        <div className="flex items-center gap-2">
          <img
            src={
              post.author.name === "Leticia Dias"
                ? ImageLeticiaAuthor
                : ImageMikaelAuthor
            }
            className="w-10 h-10 border-2 border-solid dark:border-blue-300 border-blue-500 rounded-full object-cover"
          />
          <p className="font-bold text-sm sm:text-base dark:text-white text-[#62748E]">
            escrito por: {post.author.name}
          </p>
        </div>

        <div className="mt-2">
          <ReactMarkdown className="prose dark:prose-invert prose-h1:text-black dark:prose-h1:text-white max-w-none">
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
