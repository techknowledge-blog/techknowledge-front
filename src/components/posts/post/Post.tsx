import React from "react";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../../services/postsService";
import ReactMarkdown from "react-markdown";
import { formatDateToCustomFormat } from "../../../utils/formatDate";

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

        <div className="mt-8">
          <ReactMarkdown
            className=" prose dark:prose-invert prose-h1:text-black dark:prose-h1:text-white max-w-full 
            prose-pre:overflow-x-auto prose-pre:max-w-full md:prose-pre:w-full sm-custom:prose-pre:w-[18rem] sm-extended:prose-pre:w-[30rem] xs-custom:prose-pre:w-[21rem] prose-pre:p-4 
          prose-pre:bg-gray-800 prose-pre:text-white prose-pre:rounded-lg
            prose-code:break-words prose-code:whitespace-pre-wrap"
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-2xl font-bold dark:text-white text-black">
          Post Autor
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mt-8">
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
