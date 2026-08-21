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
    {
      path: './fonts/neo_sans_pro_ultra.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Aeroplano",
  description: "Aeroplano Design - Joinville",
};

export default function RootLayout({ children }: LayoutProps<"/"> ) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased scroll-smooth`}
    >
      <body className={`${NeoSansPro.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
