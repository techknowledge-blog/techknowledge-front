import React, { useEffect, useState } from "react";

import { getUsers } from "../../services/usersService";
import { mockKnowledgers } from "./mockKnowledgers";

import flagBrasil from "../../assets/images/bandeira-de-brasil.png";
import flagAlagoas from "../../assets/images/bandeira-de-alagoas.png";
import flagPara from "../../assets/images/bandeira-do-para.png";
import { Link } from "react-router";

interface UserProps {
  id: number;
  name: string;
  username: string;
  function: string;
  role: string;
}

export function CardKnowledger() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();

      setUsers(response);
    }

    loadUsers();
  }, []);

  return (
    <div className="mt-8 flex items-start flex-wrap gap-8 justify-center lg:mt-16 lg:justify-start">
      {users.map((user) => {
        const image = mockKnowledgers.find(
          (knowledge) => knowledge.id === user.id
        )?.image;

        const flags: Record<string, string> = {
          alagoas: flagAlagoas,
          para: flagPara,
        };

        const flagKey = mockKnowledgers.find(
          (knowledge) => knowledge.id === user.id
        )?.flag;

        const flagImage = flagKey ? flags[flagKey] : undefined;

        return (
          <div key={user.id} className="flex flex-col gap-4">
            {image && <img src={image} className="h-[328px]" alt={user.name} />}

            <div>
              <p className="text-base font-medium">{user.function}</p>

              <div className="flex items-center justify-between mt-6">
                <p className="text-xl font-bold">{user.name}</p>
                <div className="flex items-center gap-2">
                  <img src={flagImage} alt="" />
                  <img src={flagBrasil} alt="" />
                </div>
              </div>
            </div>
            <Link to={`/users/${user.username}`}>
              <button className="bg-blue-400 w-full h-12 text-black rounded-full flex items-center justify-center font-bold">
                Ver perfil
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
