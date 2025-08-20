import knowledgerMonique from "../../assets/images/knowledgers/monique.png";
import knowledgerLeonardo from "../../assets/images/knowledgers/leonardo.png";
import knowledgerAlves from "../../assets/images/knowledgers/alves.png";
import knowledgerJoao from "../../assets/images/knowledgers/joao.png";
import knowledgerDaniel from "../../assets/images/knowledgers/daniel.png";

import LeonardoProfileImage from "../../assets/images/leonardo-profile-image.png";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export const mockKnowledgers = [
  {
    id: 3,
    name: "Monique Campos",
    image: knowledgerMonique,
    flag: "alagoas",
    social: [
      { icon: GithubLogo, url: "https://github.com/leticiadia" },
      { icon: InstagramLogo, url: "https://www.instagram.com/leohdas/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leohas/" },
    ],
  },

  {
    id: 4,
    name: "Leonardo Henrique",
    image: knowledgerLeonardo,
    imageProfile: LeonardoProfileImage,
    flag: "alagoas",
    social: [
      { icon: GithubLogo, url: "https://github.com/leohas" },
      { icon: InstagramLogo, url: "https://www.instagram.com/leohdas/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leohas/" },
    ],
  },

  {
    id: 7,
    name: "Alves Jhonata",
    image: knowledgerAlves,
    flag: "para",
    social: [
      { icon: GithubLogo, url: "https://github.com/leticiadia" },
      { icon: InstagramLogo, url: "https://www.instagram.com/leohdas/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leohas/" },
    ],
  },

  {
    id: 8,
    name: "João Jacinto",
    image: knowledgerJoao,
    flag: "alagoas",
    social: [
      { icon: GithubLogo, url: "https://github.com/leticiadia" },
      { icon: InstagramLogo, url: "https://www.instagram.com/leohdas/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leohas/" },
    ],
  },

  {
    id: 9,
    name: "Daniel Duarte",
    image: knowledgerDaniel,
    flag: "alagoas",
    social: [
      { icon: InstagramLogo, url: "https://www.instagram.com/leohdas/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/leohas/" },
    ],
  },
];
