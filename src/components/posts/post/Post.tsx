import React, { useEffect, useState } from "react";
import { useParams } from "../../../../node_modules/react-router/dist/production/index";
import { formatDateToCustomFormat } from "../../../utils/formatDate";
import { mockPost } from "../mockPost";
import { MdxProvider } from "./MdxProvider";

export function Post() {
  const { id } = useParams<{ id: string }>();
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [hasViewed, setHasViewed] = useState(false);

  const post = mockPost.find((post) => post.id === id);

  useEffect(() => {
    const storedViews = localStorage.getItem(`post_views_${id}`);
    const initialViewCount = storedViews ? parseInt(storedViews, 10) : 0;
    setViewCount(initialViewCount);
  }, [id]);

  useEffect(() => {
    if (viewCount !== null) {
      localStorage.setItem(`post_views_${id}`, viewCount.toString());
    }
  }, [viewCount, id]);

  useEffect(() => {
    const timer = setInterval(() => setTimeSpent((prev) => prev + 1), 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        markAsViewed();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (timeSpent >= 30) {
      markAsViewed();
    }
  }, [timeSpent]);

  const markAsViewed = () => {
    if (!hasViewed && viewCount !== null) {
      setHasViewed(true);
      setViewCount((prev) => (prev !== null ? prev + 1 : 1));
    }
  };

  useEffect(() => {
    if (post?.content) {
      post.content().then((module) => setContent(() => module.default));
    }
  }, [post]);

  if (!post) {
    return <p className="text-white text-center">Post não encontrado</p>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between sm:flex-row sm:justify-between items-center sm:items-center mt-8 sm:gap-4">
        <div className="flex items-center">
          <div className="h-6 w-1 bg-blue-300 mr-4"></div>
          <p className="font-bold text-sm sm:text-base">
            {formatDateToCustomFormat(post.date)}
          </p>
        </div>
        <p className="font-bold text-sm sm:text-base">
          {viewCount !== null
            ? `${viewCount} ${viewCount > 1 ? "visualizações" : "visualização"}`
            : "Carregando..."}
        </p>
      </div>

      <MdxProvider>
        <div className="prose prose-invert max-w-none mt-8">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              {post.title}
            </h1>
            <p className="font-bold text-sm sm:text-base">
              escrito por: {post.author}
            </p>
          </div>
          <div className="mt-6">
            {Content ? <Content /> : <p>Carregando conteúdo...</p>}
          </div>
        </div>
      </MdxProvider>
    </div>
  );
}
