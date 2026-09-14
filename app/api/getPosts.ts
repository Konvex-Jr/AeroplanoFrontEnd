import { Post } from "../lib/post";
import { convertToByte64 } from "../lib/convertToByte64";

const img001 = await convertToByte64("public/projetos/Carr_Actigrafo_imagem.png")
const img002 = await convertToByte64("public/projetos/Carr_Cervejeira_imagem.png")
const img003 = await convertToByte64("public/projetos/Carr_Tesoura_imagem.png")

export const posts: Post[] = [
    { 
        id:      "1",
        title:   "Num mundo visual é preciso dar vida aos sonhos",
        image:   img001,
        content: "Conteúdo."
    },
        { 
        id:      "2",
        title:   "Atratividade: Como o design constrói este valor no produto",
        image:   img002,
        content: "Conteúdo."
    },
    { 
        id:      "3",
        title:   "Valor percebido: Como o design transforma utilidade em desejo.",
        image:   img003,
        content: "Conteúdo."
    }
]