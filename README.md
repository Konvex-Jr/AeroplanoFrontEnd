# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
/* 
ESTRUTURAÇÃO DO PROJETO

src/
├── assets/
│   └── images/
│       ├── hero/          → imagens da seção inicial
│       ├── projects/      → imagens do carrossel "Como Fazemos"
│       └── clients/       → logos da seção de clientes
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── HowWeWork.tsx
│   ├── Clients.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── Carousel/
│       ├── Carousel.tsx
│       ├── CarouselCard.tsx
│       └── CarouselDots.tsx
├── data/
│   ├── projects.ts        → array com os projetos do carrossel (título, cliente, imagem, descrição)
│   └── clients.ts         → array com os logos/nomes dos clientes
├── App.tsx                 (já existe — só vai importar e organizar as seções em ordem)
├── main.tsx                 (já existe)
└── index.css                 (já existe — import do Tailwind)

Seção na LP                                                             Componente                O que tem dentro

Logo+manu "hambúrguer"                                                  Header.tsx                Navegação, toggle do menu mobile
Chamada + imagem de produtos	                                          Hero.tsx	                Título, texto, imagem
"conhecimento e experiência" / "entendimento do contexto"	              About.tsx	                Os dois blocos de texto
"Como Fazemos" + carrossel	                                            HowWeWork.tsx             (usa Carousel/)	Texto do processo + carrossel de projetos
Grade de logos	                                                        Clients.tsx	              Grid dos 16 logos
Endereço, telefones, redes, formulário	                        Footer.tsx + ContactForm.tsx	    Info de contato + formulário separado (por ter estado
                                                                                                  próprio dos campos)

Duas observações rápidas:

data/projects.ts e data/clients.ts: em vez de escrever o conteúdo direto no JSX, deixa num array separado com uma interface (ex: interface Project { title: string; client: string; image: string; description: string }). Assim, quando as imagens/textos reais chegarem, você só edita esses arquivos, sem mexer no componente.

Ícones do rodapé/menu (localização, telefone, Instagram, e-mail, hambúrguer): dá pra usar uma lib tipo lucide-react em vez de guardar SVG manualmente — aí nem precisa de pasta de ícones.

*/