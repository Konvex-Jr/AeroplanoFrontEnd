export interface Project {
  id: number;
  image: string | null;
  backImage: string | null;
  imagePosition?: string;
  imagemZoom?: number; 
  fit?: "cover" | "contain"; 
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/projetos/Carr_Actigrafo_imagem.png",
    backImage: "/projetos/Carr_Actigrafo_texto.png",
    imagePosition: "center",
    imagemZoom: 1
  },
  {
    id: 2,
    image: "/projetos/Carr_Cervejeira_imagem.png",
    backImage: "/projetos/Carr_Cervejeira_texto.png",
    imagePosition: "center",
    imagemZoom: 1
  },
  {
    id: 3,
    image: "/projetos/Carr_Fluire_imagem.png",
    backImage:"/projetos/Carr_Fluire_texto.png",
    imagePosition: "center",
    imagemZoom: 1
  },
  {
    id: 4,
    image: "/projetos/Carr_Lavadora_imagem.png",
    backImage:"/projetos/carr_Lavadora_texto.png",
    imagePosition: "center",
    imagemZoom: 1
  },
  {
    id: 5,
    image: "/projetos/Carr_Tesoura_imagem.png",
    backImage: "/projetos/Carr_Tesoura_textoEdit.png",
    imagePosition: "center",
    imagemZoom: 1,
    fit: "cover"
  },
];