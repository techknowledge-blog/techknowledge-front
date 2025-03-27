import React, { useEffect, useState } from "react";

import { ArrowRight } from "../../../../node_modules/@phosphor-icons/react/dist/index";
import { Link } from "../../../../node_modules/react-router/dist/production/index";
import { formatDateToLong } from "../../../utils/formatDate";
import { getPosts } from "../../../services/postsService";

export interface PostType {
  id: number;
  title: string;
  previewContent: string;
  createdAt: string;
  category: {
    name: string;
  };
  slug: string;
}

export function PostList() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();

        if (!Array.isArray(data)) {
          throw new Error("Formato de dados inválido");
        }

        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }

    fetchPosts();
  }, []);

  function groupPostsByCategory(posts: PostType[]) {
    return posts.reduce<Record<string, PostType[]>>((acc, post) => {
      const categoryName = post.category.name;
      acc[categoryName] = acc[categoryName] || [];
      acc[categoryName].push(post);
      return acc;
    }, {});
  }

  const postsByCategory = groupPostsByCategory(posts);

  return (
    <section className="flex flex-col gap-12 py-8">
      {Object.entries(postsByCategory).map(([category, posts]) => (
        <div key={category} className="category-section">
          <h2 className="text-2xl font-semibold text-[#EDE9FE] mb-6">
            {category}
          </h2>

          <ul
            className={`grid grid-cols-1 gap-4 ${
              posts.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
            }`}
          >
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-[#1E293B] p-6 rounded-lg hover:bg-[#334155] transition w-[20rem] md:w-full h-full flex flex-col"
              >
                <div className="flex flex-col gap-4 flex-grow">
                  <Link to={`/posts/${post.slug}`} className="no-underline">
                    <h3 className="text-sm md:text-xl font-bold text-[#EDE9FE] hover:underline hover:decoration-2 hover:decoration-blue-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[#C6D1F2]">
                    {post.previewContent}
                  </p>
                  <p className="text-xs text-[#9CA3AF] font-semibold">
                    {formatDateToLong(post.createdAt)}
                  </p>
                </div>

                <Link
                  to={`/posts/${post.slug}`}
                  className="flex items-center gap-2 font-bold mt-auto min-h-14 text-sm text-white hover:text-blue-300 hover:underline"
                >
                  Ler mais
                  <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
