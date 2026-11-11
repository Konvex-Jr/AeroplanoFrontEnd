import localFont from "next/font/local"
import type { Metadata } from "next";
import "./globals.css";


const NeoSansPro = localFont({
  src: [
    {
      path: './fonts/neo_sans_pro.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/neo_sans_pro_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/neo_sans_pro_bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // O peso 800 (ultra) não é usado em nenhum lugar do site: removido para não baixar/pré-carregar 51KB à toa.
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aeroplano Design",
  description: "Aeroplano Design - Joinville",
  openGraph: {
    title: "Aeroplano Design",
    description: "Aeroplano Design - Joinville",
    siteName: "Aeroplano Design",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/"> ) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${NeoSansPro.className} min-h-full flex flex-col`} suppressHydrationWarning>
        {/* Link para pular direto ao conteúdo (navegação por teclado / leitores de tela) */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-[#244654] focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
