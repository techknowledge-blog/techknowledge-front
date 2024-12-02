import React from "react";

interface PostPreviewType {
  id: string;
  title: string;
  summary: string;
  coverImage?: string;
  link: string;
  flag: string;
  date: string;
}

interface PostPreviewProps {
  posts: PostPreviewType[];
}

export function PostPreview({ posts }: PostPreviewProps) {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  const sortedPosts = posts
    .sort(
      (postWithMoreRecentDate, postWithLessRecentDate) =>
        new Date(postWithLessRecentDate.date).getTime() -
        new Date(postWithMoreRecentDate.date).getTime()
    )
    .slice(0, 3);

  return (
    <div className="flex flex-wrap items-start gap-8 mt-12 justify-center lg:justify-start">
      {sortedPosts.map((post) => (
        <article
          key={post.id}
          className="flex flex-col items-center lg:items-start"
        >
          <div>
            {post.coverImage && (
              <img
                src={post.coverImage}
                className="w-[18rem] h-[10rem] rounded-lg object-cover sm:w-[16rem] sm:h-[9rem] lg:w-[18rem] lg:h-[10rem]"
                alt={`Capa do post ${post.title}`}
              />
            )}
            <p className="w-[7.25rem] h-6 bg-[#EDE9FE] rounded flex items-center justify-center text-black font-semibold text-xs mt-4 mx-auto lg:mx-0">
              {post.flag}
            </p>
          </div>

          <div className="text-center lg:text-left mt-4">
            <h2 className="font-semibold text-[#EDE9FE] text-base w-[16rem] sm:w-[14rem] lg:w-[14rem]">
              {post.title}
            </h2>
            <p className="text-[#C6D1F2] text-sm w-[16rem] sm:w-[14rem] lg:w-[16rem] mx-auto mb-4 lg:mx-0 mt-4 sm:mb-6 lg:min-h-[34vh]">
              {post.summary}
            </p>
            <p className="text-[#EDE9FE] font-bold text-base">{post.date}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
