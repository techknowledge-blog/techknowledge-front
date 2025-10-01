import knowledgerMonique from "../../assets/images/knowledgers/monique.png";
import knowledgerLeonardo from "../../assets/images/knowledgers/leonardo.png";
import knowledgerAlves from "../../assets/images/knowledgers/alves.png";
import knowledgerJoao from "../../assets/images/knowledgers/joao.png";
import knowledgerDaniel from "../../assets/images/knowledgers/daniel.png";

import LeonardoProfileImage from "../../assets/images/leonardo-profile-image.png";
import AlvesProfileImage from "../../assets/images/image-alves-profile.png";
import MoniqueProfileImage from "../../assets/images/image-monique-profile.png";
import JoaoProfileImage from "../../assets/images/image-monique-profile.png";
import DanielProfileImage from "../../assets/images/image-daniel-profile.png";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export const mockKnowledgers = [
  {
    id: 3,
    name: "Monique Campos",
    image: knowledgerMonique,
    imageProfile: MoniqueProfileImage,
    flag: "alagoas",
    social: [
      { icon: GithubLogo, url: "https://github.com/CyberNicky" },
      { icon: InstagramLogo, url: "https://www.instagram.com/nicky__dev/" },
      {
        icon: LinkedinLogo,
        url: "https://www.linkedin.com/in/monique-campos-albuquerque/",
      },
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
    imageProfile: AlvesProfileImage,
    flag: "para",
    social: [
      { icon: GithubLogo, url: "https://github.com/4llves" },
      { icon: InstagramLogo, url: "https://www.instagram.com/4llves_/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/4llves/" },
    ],
  },

  {
    id: 8,
    name: "João Jacinto",
    image: knowledgerJoao,
    imageProfile: JoaoProfileImage,
    flag: "alagoas",
    social: [
      { icon: GithubLogo, url: "https://github.com/mrgreentm" },
      { icon: InstagramLogo, url: "https://www.instagram.com/joaojacintoo/" },
      {
        icon: LinkedinLogo,
        url: "https://www.linkedin.com/in/joaojacintoneto/",
      },
    ],
  },

  {
    id: 9,
    name: "Daniel Duarte",
    image: knowledgerDaniel,
    imageProfile: DanielProfileImage,
    flag: "alagoas",
    social: [
      { icon: InstagramLogo, url: "https://www.instagram.com/odaniel2d/" },
      { icon: LinkedinLogo, url: "https://www.linkedin.com/in/daniel2d/" },
    ],
  },
];
