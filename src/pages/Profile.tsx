import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../services/usersService";
import { mockKnowledgers } from "../components/cardknowledger/mockKnowledgers";
import { Link } from "react-router";

interface UserProps {
  name: string;
  function: string;
  description: string;
  posts: Posts[];
}

interface Posts {
  title: string;
  slug: string;
}

export function Profile() {
  const [user, setUser] = useState<UserProps>();

  const knowledgerInfo = mockKnowledgers.find(
    (knowledger) => knowledger.name === user?.name
  );

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.substring(path.lastIndexOf("/") + 1);

    async function loadUser() {
      const user = await getUserByUsername(slug);
      setUser(user);
    }

    loadUser();
  }, []);

  return (
    <div className="px-4 screen-custom:w-[22rem] sm-medium:w-[24rem] md:w-[46rem] lg:w-[62rem]">
      <div className="flex flex-col items-center gap-8 mt-16 lg:flex-row">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold">{user?.name}</h2>
            <p className="text-lg font-semibold text-blue-400">
              {user?.function}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Sobre minha jornada</h3>
            <p className="whitespace-pre-line w-full lg:w-[30rem]">
              {user?.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Artigos Publicados</h3>

            <div className="flex flex-col gap-2">
              {user?.posts && user.posts.length > 0 ? (
                user?.posts.map((post) => (
                  <Link key={post.slug} to={`/posts/${post.slug}`}>
                    <span className="text-blue-400 font-semibold hover:underline">
                      {post.title}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="text-blue-400 font-semibold">
                  Não há artigos publicados no momento.
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <img
            src={knowledgerInfo?.imageProfile}
            className="transition-transform duration-300 hover:rotate-[1.5deg] hover:scale-105"
            alt=""
          />

          <div className="flex items-center justify-center gap-4 mt-4">
            {knowledgerInfo?.social?.map(
              ({ icon: Icon, url }, index: number) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <Icon size={32} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
