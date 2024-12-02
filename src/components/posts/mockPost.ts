import image1 from "../../assets/images/faz-funcionar-e-depois-melhora.jpeg";
import image2 from "../../assets/images/olimpiada-do-conhecimento.jpeg";
import image3 from "../../assets/images/techknowledge.jpeg";

import { formatDate } from "../../utils/formatDate";

export const mockPost = [
  {
    id: "1",
    title: "“Fax funcionar e depois melhora.” Será mesmo?",
    summary:
      "Nesse post vamos abordar um pouco sobre um assunto bastante comum em nossa área onde nos deparamos constantemente com esse cenário. Será que fazer funcionar e depois melhorar é a melhor forma de se resolver um problema? Vem descobrir comigo.",
    coverImage: image1,
    link: "",
    flag: "Reflexões",
    date: formatDate(new Date("2024-11-28")),
    category: "reflexões",
    author: "Leticia Dias",
  },
  {
    id: "2",
    title: "Olímpiada do Conhecimento 2022",
    summary:
      "O que é a Olimpíada do Conhecimento? Como é o processo de treinamento dos competidores? Isso e muito mais, vamos ver no decorrer deste post, sobre essa competição que tem gerado um impacto na vida de muitos competidores que passam por ela.",
    coverImage: image2,
    link: "",
    flag: "Olimpíada",
    date: formatDate(new Date("2024-11-28")),
    category: "olimpíada",
  },
  {
    id: "3",
    title: "TechKnowledge: Ponto Zero",
    summary:
      "Como surgiu a ideia de criar esse blog, qual o objetivo dele? Qual a  finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!",
    coverImage: image3,
    link: "",
    flag: "TechKnowledge",
    date: formatDate(new Date("2024-11-28")),
    category: "techKnowledge",
  },
  {
    id: "4",
    title: "“Fax funcionar e depois melhora.” Será mesmo?",
    summary:
      "Nesse post vamos abordar um pouco sobre um assunto bastante comum em nossa área onde nos deparamos constantemente com esse cenário. Será que fazer funcionar e depois melhorar é a melhor forma de se resolver um problema? Vem descobrir comigo.",
    coverImage: image1,
    link: "",
    flag: "Reflexões",
    date: formatDate(new Date("2024-11-20")),
    category: "reflexões",
  },
];
