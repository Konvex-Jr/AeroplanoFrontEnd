export interface Project {
  id: number;
  image: string | null;
  backImage: string | null;
  imagePosition?: string;
  imagemZoom?: number;
  fit?: "cover" | "contain";
  backFit?: "cover" | "contain";
  backPosition?: string;
  backZoom?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/projetos/Carr_Actigrafo_imagem.png",
    backImage: "/projetos/Carr_Actigrafo_texto.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover",
  },
  {
    id: 2,
    image: "/projetos/Carr_Cervejeira_imagem.png",
    backImage: "/projetos/Carr_Cervejeira_texto.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover",
    backFit: "contain",
    backZoom: 1.15,
  },
  {
    id: 3,
    image: "/projetos/Carr_Fluire_imagem.png",
    backImage: "/projetos/Carr_Fluire_texto.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover",
  },
  {
    id: 4,
    image: "/projetos/Carr_Lavadora_imagem.png",
    backImage: "/projetos/Carr_Lavadora_texto.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover",
  },
  {
    id: 5,
    image: "/projetos/Carr_Tesoura_imagem.png",
    backImage: "/projetos/Carr_Tesoura_texto.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover",
  },
];