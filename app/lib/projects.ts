export interface Project {
  id: number;
  title: string;
  client: string;
  image: string | null;
  description: string;
}

// Dados de exemplo — troque pelos projetos reais quando tiver o conteúdo.
// "image: null" mostra um placeholder cinza no lugar da foto.
export const projects: Project[] = [
  {
    id: 1,
    title: "Projeto 1",
    client: "Cliente 1",
    image: null, // ex: importe a imagem e coloque aqui, tipo: image: projeto1Img
    description: "Descrição do projeto 1. Substitua por um texto real quando o conteúdo chegar.",
  },
  {
    id: 2,
    title: "Projeto 2",
    client: "Cliente 2",
    image: null,
    description: "Descrição do projeto 2.",
  },
  {
    id: 3,
    title: "Projeto 3",
    client: "Cliente 3",
    image: null,
    description: "Descrição do projeto 3.",
  },
  {
    id: 4,
    title: "Projeto 4",
    client: "Cliente 4",
    image: null,
    description: "Descrição do projeto 4.",
  },
  {
    id: 5,
    title: "Projeto 5",
    client: "Cliente 5",
    image: null,
    description: "Descrição do projeto 5.",
  },
];