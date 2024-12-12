import React from "react";

import { ArrowRight } from "../../../../node_modules/@phosphor-icons/react/dist/index";
import { Link } from "../../../../node_modules/react-router/dist/production/index";
import { formatDateToLong } from "../../../utils/formatDate";

import { mockPost } from "../mockPost";

interface PostType {
  id: string;
  title: string;
  summary: string;
  link: string;
  flag: string;
  date: string;
  category: string;
}

export function PostList() {
  function groupPostsByCategory(posts: PostType[]) {
    return posts.reduce<Record<string, PostType[]>>((acc, post) => {
      acc[post.category] = acc[post.category] || [];
      acc[post.category].push(post);
      return acc;
    }, {});
  }

  const postsByCategory = groupPostsByCategory(mockPost);

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
                className="bg-[#1E293B] p-6 rounded-lg hover:bg-[#334155] transition w-[20rem] md:w-full"
              >
                <div className="flex flex-col gap-4">
                  <Link to={`/post/${post.id}`}>
                    <a
                      href="#"
                      className="text-sm md:text-xl font-bold text-[#EDE9FE] no-underline hover:underline hover:decoration-2 hover:decoration-blue-300"
                    >
                      {post.title}
                    </a>
                  </Link>
                  <p className="text-sm text-[#C6D1F2]">{post.summary}</p>
                  <p className="text-xs text-[#9CA3AF] font-semibold">
                    {formatDateToLong(post.date)}
                  </p>
                </div>

                <a
                  href={post.link}
                  className="flex items-center gap-2 font-bold mt-4 text-sm text-white hover:text-blue-300 hover:underline"
                >
                  Ler mais
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
