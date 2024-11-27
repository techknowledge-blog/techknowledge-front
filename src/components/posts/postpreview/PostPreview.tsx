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
  post: PostPreviewType;
}

export function PostPreview({ post }: PostPreviewProps) {
  return (
    <article>
      <div>
        {post.coverImage && (
          <img
            src={post.coverImage}
            className=" w-[18rem] h-[10rem] rounded-lg object-cover"
            alt={`Capa do post ${post.title}`}
          />
        )}
        <p className="w-[7.25rem] h-6 bg-[#EDE9FE] rounded flex items-center justify-center text-black font-semibold text-xs mt-4">
          {post.flag}
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-[#EDE9FE] text-base w-[14rem] mt-4">
          {post.title}
        </h2>
        <p className="text-[#C6D1F2] text-sm w-[18rem] mt-4 min-h-[34vh]">
          {post.summary}
        </p>
        <p className="text-[#EDE9FE] font-bold text-base">{post.date}</p>
      </div>
    </article>
  );
}
