import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDateToLong } from "../../../utils/formatDate";
import { PostType } from "../postlist/PostList";
import { getPosts } from "../../../services/postsService";

import { mockPost } from "../mockPost";

export function PostPreview() {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();

        if (!Array.isArray(data)) {
          throw new Error("Formato de dados inválido");
        }

        setPost(data);
      } catch (error) {
        setError("Erro ao carregar os posts.");
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Carregando posts...</p>;
  if (error) return <p>{error}</p>;
  if (!post.length) return <p>Nenhum post disponível</p>;

  const sortedPosts = post
    .sort(
      (postWithMoreRecentDate, postWithLessRecentDate) =>
        new Date(postWithLessRecentDate.createdAt).getTime() -
        new Date(postWithMoreRecentDate.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className="flex flex-wrap items-start gap-8 mt-12 justify-center lg:justify-start">
      {sortedPosts.map((post) => {
        const mock = mockPost.find((mock) => mock.id === post.id);

        return (
          <article
            key={post.id}
            className="flex flex-col items-center lg:items-start md:w-60 lg:w-72"
          >
            <div>
              <img
                src={mock?.coverImage}
                className="w-[18rem] h-[10rem] rounded-lg object-cover sm:w-[16rem] sm:h-[9rem] lg:w-[18rem] lg:h-[10rem]"
                alt={`Capa do post ${post.title}`}
              />
              <p className="w-[7.25rem] h-6 dark:bg-[#EDE9FE] bg-[#93C5FD] rounded flex items-center justify-center text-black font-semibold text-xs mt-4 mx-auto lg:mx-0">
                {post.category.name}
              </p>
            </div>

            <div className="text-center lg:text-left mt-4">
              <Link
                to={`/posts/${post.slug}`}
                className="font-semibold dark:text-[#EDE9FE] text-blue-500 text-base hover:underline w-[16rem] sm:w-[14rem] md:w-[16rem] lg:w-[18rem] block md:min-h-[2rem] md-custom:min-h-[3rem] lg-custom:min-h-[3rem] lg:min-h-[3rem]"
              >
                {post.title}
              </Link>

              <p className="dark:text-[#C6D1F2] text-[#62748E] text-sm leading-relaxed w-[16rem] sm:w-[14rem] lg:w-[16rem] mx-auto mb-4 lg:mx-0 mt-4 sm:mb-6 md:min-h-[14vh] lg:min-h-[16vh] xl:min-h-[32vh] 2xl:min-h-[16vh]">
                {post.previewContent}
              </p>

              <p className="dark:text-[#EDE9FE] text-blue-500 font-bold text-base">
                {formatDateToLong(post.createdAt)}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
