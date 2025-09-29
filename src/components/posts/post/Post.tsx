import React from "react";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../../services/postsService";
import ReactMarkdown from "react-markdown";
import { formatDateToCustomFormat } from "../../../utils/formatDate";

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import { mockAuthor } from "../mockAuthor";
interface PostProps {
  id: number;
  title: string;
  author: {
    name: string;
  };
  content: string;
  slug: string;
  createdAt: string;
  article_level: string;
}

export function Post() {
  const [post, setPost] = useState<PostProps>();

  const authorInfo = mockAuthor.find(
    (author) => author.name === post?.author.name
  );

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

  const levelColors: Record<string, string> = {
    Iniciante: "bg-[#B4CB3F]",
    Intermediário: "bg-[#408EEB]",
    Avançado: "bg-[#7B66D4]",
  };

  return (
    <div className="px-6 mt-12 w-full md:w-[46rem] lg:w-[62rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-6 w-1 dark:bg-blue-300 bg-blue-500 mr-4"></div>
          <p className="font-bold text-sm sm:text-base dark:text-white text-[#62748E]">
            {formatDateToCustomFormat(post.createdAt)}
          </p>
        </div>

        <span
          className={`w-[6.5rem] h-[1.625rem] rounded-full text-xs text-black font-semibold flex items-center justify-center ${
            levelColors[post.article_level] || "bg-gray-200 text-gray-700"
          }`}
        >
          <p>{post.article_level}</p>
        </span>
      </div>

      <div className="prose prose-invert max-w-none mt-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white text-black mb-0">
          {post.title}
        </h1>

        <div className="mt-8">
          <ReactMarkdown
            className=" prose dark:prose-invert prose-h1:text-black dark:prose-h1:text-white max-w-full 
            prose-pre:overflow-x-auto prose-pre:max-w-full md:prose-pre:w-full sm-custom:prose-pre:w-full sm-extended:prose-pre:w-full xs-custom:prose-pre:w-full prose-pre:p-4 
          prose-pre:bg-gray-800 dark:prose-pre:bg-slate-800 prose-pre:text-white prose-pre:rounded-lg
            prose-code:break-words prose-code:whitespace-pre-wrap"
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-2xl font-bold dark:text-white text-black">
          Post Autor
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 mt-8">
          <img
            src={authorInfo?.image}
            alt={post.author.name}
            className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-solid dark:border-blue-300 border-blue-500 rounded-full object-cover"
          />

          <div className="text-center sm:text-left">
            <p className="text-xl font-semibold dark:text-white text-black mb-2">
              {post.author.name}
            </p>
            <p className="text-base dark:text-white text-black">
              {authorInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
