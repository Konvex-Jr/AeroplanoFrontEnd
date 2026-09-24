export interface PortfolioProject {
  id: number;
  thumbnail: string; // imagem de capa, já vem com título/texto embutido
  images: string[]; // imagens do carrossel que abre no modal  imagePosition?: string;
  imagePosition?: string;
  imagemZoom?: number;
  fit?: "cover" | "contain";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    thumbnail: "/portfolio/ABG Color System/ABG Color System_imagem 2.png",
    images: [
      "/portfolio/ABG Color System/ABG Color System_imagem 1.png",
      "/portfolio/ABG Color System/ABG Color System_texto.png",
    ],
    imagemZoom: 1.16,
    fit: "contain"
  },

  {
    id: 2,
    thumbnail: "/portfolio/Actigrafo/Actigrafo_imagem 1.png",
    images: [
      "/portfolio/Actigrafo/actigrafo_imagem 2.png",
      "/portfolio/Actigrafo/actigrafo_imagem 3.png",
      "/portfolio/Actigrafo/actigrafo_imagem 4.png",
      "/portfolio/Actigrafo/actigrafo_texto.png",
    ],
  },

  {
    id: 3,
    thumbnail: "/portfolio/B Blend/B_Blend_imagem 1.png",
    images: [
      "/portfolio/B Blend/B_Blend_imagem 2.png",
      "/portfolio/B Blend/B_Blend_texto.png",
      "/portfolio/B Blend/abg_color_system_22_10_54.png",
    ],
    imagePosition: "30% center",
  },

  {
    id: 4,
    thumbnail: "/portfolio/Central de alarmes/Central de alarmes_imagem 1.png",
    images: [
      "/portfolio/Central de alarmes/Central de alarmes_imagem 2.png",
      "/portfolio/Central de alarmes/Central de alarmes_imagem 3.png",
      "/portfolio/Central de alarmes/Central de alarmes_ texto.png",
    ],
  },

  {
    id: 5,
    thumbnail: "/portfolio/Cervejeira/Cervejeira_imagem 1.png",
    images: [
      "/portfolio/Cervejeira/Cervejeira_imagem 2.png",
      "/portfolio/Cervejeira/Cervejeira_texto.png",
    ],
  },

  {
    id: 6,
    thumbnail: "/portfolio/Copos porcelana/Copos porcelana_imagem 1.png",
    images: [
      "/portfolio/Copos porcelana/Copos porcelana_imagem 2.png",
      "/portfolio/Copos porcelana/Copos porcelana_texto.png",
    ],
  },

  {
    id: 7,
    thumbnail: "/portfolio/Dispenser Goedert/Dispenser Goedert_imagem 1.png",
    images: [
      "/portfolio/Dispenser Goedert/Dispenser Goedert_imagem 2.png",
      "/portfolio/Dispenser Goedert/Dispenser Goedert_imagem 3.png",
      "/portfolio/Dispenser Goedert/Dispenser Goedert_imagem 4.png",
      "/portfolio/Dispenser Goedert/Dispenser Goedert_texto.png",
    ],
    imagePosition: "27% center",
  },

  {
    id: 8,
    thumbnail: "/portfolio/Elber/Refrigerador Elber_imagem 1.png",
    images: [
      "/portfolio/Elber/Refrigerador Elber_imagem 2.png",
      "/portfolio/Elber/Refrigerador Elber_texto.png",
    ],
  },

  {
    id: 9,
    thumbnail: "/portfolio/Escorredor Stolf/Escorredor Stolf_imagem 1.png",
    images: [
      "/portfolio/Escorredor Stolf/Escorredor Stolf_imagem 2.png",
      "/portfolio/Escorredor Stolf/Escorredor Stolf_imagem 3.png",
      "/portfolio/Escorredor Stolf/Escorredor Stolf_texto.png",
    ],
  },

  {
    id: 10,
    thumbnail: "/portfolio/Espumador/Espumador_imagem 1.png",
    images: [
      "/portfolio/Espumador/Espumador_imagem 2.png",
      "/portfolio/Espumador/Espumador_ texto.png",
    ],
  },

  {
    id: 11,
    thumbnail: "/portfolio/Fibrafort/Fibrafort_imagem 1.png",
    images: [
      "/portfolio/Fibrafort/Fibrafort_imagem 2.png",
      "/portfolio/Fibrafort/Fibrafort_imagem 3.png",
      "/portfolio/Fibrafort/Fibrafort_imagem 4.png",
      "/portfolio/Fibrafort/Fibrafort_ texto.png",
    ],
  },

  {
    id: 12,
    thumbnail: "/portfolio/Fluire/Fluire_imagem 1.png",
    images: [
      "/portfolio/Fluire/Fluire_imagem 2.png",
      "/portfolio/Fluire/Fluire_imagem 3.png",
      "/portfolio/Fluire/Fluire_texto.png",
    ],
  },

  {
    id: 13,
    thumbnail: "/portfolio/Frank/Frank_imagem 1.png",
    images: [
      "/portfolio/Frank/Frank_imagem 2.png",
      "/portfolio/Frank/Frank_texto.png",
    ],
  },

  {
    id: 14,
    thumbnail: "/portfolio/Fruteira/Fruteira_imagem 1.png",
    images: [
      "/portfolio/Fruteira/Fruteira_imagem 2.png",
      "/portfolio/Fruteira/Fruteira_imagem 3.png",
      "/portfolio/Fruteira/Fruteira_texto.png",
    ],
  },

  {
    id: 15,
    thumbnail: "/portfolio/Lavadora/Lavadora_imagem 1.png",
    images: [
      "/portfolio/Lavadora/Lavadora_imagem 2.png",
      "/portfolio/Lavadora/Lavadora_texto.png",
    ],
  },

  {
    id: 16,
    thumbnail: "/portfolio/Oxidog/Oxidog_imagem 1.png",
    images: [
      "/portfolio/Oxidog/Oxidog_imagem 2.png",
      "/portfolio/Oxidog/Oxidog_imagem 3.png",
      "/portfolio/Oxidog/Oxidog_texto.png",
    ],
  },

  {
    id: 17,
    thumbnail: "/portfolio/Purificador/Purificador_imagem 1.png",
    images: [
      "/portfolio/Purificador/Purificador_imagem 2.png",
      "/portfolio/Purificador/Purificador_imagem 3.png",
      "/portfolio/Purificador/Purificador_texto.png",
    ],
  },

  {
    id: 18,
    thumbnail: "/portfolio/Tesoura_Jacto/Tesoura_Jacto_imagem 1.png",
    images: [
      "/portfolio/Tesoura_Jacto/Tesoura_Jacto_imagem 2.png",
      "/portfolio/Tesoura_Jacto/Tesoura_Jacto_texto.png",
    ],
  },
];