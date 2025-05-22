import image1 from "../../assets/images/faz-funcionar-e-depois-melhora.jpeg";
import image2 from "../../assets/images/olimpiada-do-conhecimento.jpeg";
import image3 from "../../assets/images/techknowledge.jpeg";
import image4 from "../../assets/images/thumbnail.png";
import image5 from "../../assets/images/challenge-shopping-cart.png";
import image6 from "../../assets/images/thumbnail-dev-frontend.jpg";
import image7 from "../../assets/images/errando-que-se-aprende.jpg";
import image8 from "../../assets/images/pratique-como-ser-um-dev.jpg";
import image9 from "../../assets/images/criando-minhas-interfaces.jpg";

export const mockPost = [
  {
    id: 1,
    title: "“Faz funcionar e depois melhora.” Será mesmo?",
    summary:
      "Nesse post vamos abordar um pouco sobre um assunto bastante comum em nossa área onde nos deparamos constantemente com esse cenário. Será que fazer funcionar e depois melhorar é a melhor forma de se resolver um problema? Vem descobrir comigo.",
    coverImage: image1,
    content: () => import("../posts/post/post1.mdx"),
    link: "",
    flag: "Reflexões",
    date: "2024-11-28",
    category: "reflexões",
    author: "Leticia Dias",
  },
  {
    id: 2,
    title: "Olímpiada do Conhecimento 2022",
    summary:
      "O que é a Olimpíada do Conhecimento? Como é o processo de treinamento dos competidores? Isso e muito mais, vamos ver no decorrer deste post, sobre essa competição que tem gerado um impacto na vida de muitos competidores que passam por ela.",
    coverImage: image2,
    content: () => import("../posts/post/post2.mdx"),
    link: "",
    flag: "Olimpíada",
    date: "2024-11-28",
    category: "olimpíada",
    author: "Leticia Dias",
  },
  {
    id: 3,
    title: "TechKnowledge: Ponto Zero",
    summary:
      "Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!",
    coverImage: image3,
    content: () => import("../posts/post/post3.mdx"),
    link: "",
    flag: "TechKnowledge",
    date: "2024-11-28",
    category: "techknowledge",
    author: "Mikael Ribeiro",
  },
  {
    id: 4,
    title: "Quem somos nós?",
    summary:
      "Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs que gostam muito de tecnologia? Vem descobrir um pouco sobre a jornada desses dois jovens devs.",
    coverImage: image1,
    content: () => import("../posts/post/post4.mdx"),
    link: "",
    flag: "TechKnowledge",
    date: "2024-11-20",
    category: "techknowledge",
    author: "Leticia Dias",
  },
  {
    id: 5,
    title: "Quem somos nós?",
    summary:
      "Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs que gostam muito de tecnologia? Vem descobrir um pouco sobre a jornada desses dois jovens devs.",
    coverImage: image4,
    content: () => import("../posts/post/post4.mdx"),
    link: "",
    flag: "TechKnowledge",
    date: "2024-11-20",
    category: "techknowledge",
    author: "Leticia Dias",
  },
  {
    id: 6,
    coverImage: image5,
  },
  {
    id: 7,
    coverImage: image6,
  },
  {
    id: 8,
    coverImage: image7,
  },
  {
    id: 9,
    coverImage: image8,
  },
  {
    id: 10,
    coverImage: image9,
  },
];
