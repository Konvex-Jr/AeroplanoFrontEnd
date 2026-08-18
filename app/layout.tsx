import localFont from "next/font/local"
import type { Metadata } from "next";
import "./globals.css";


const NeoSansPro = localFont({
  src: './fonts/neo_sans_pro.woff2'
})

export const metadata: Metadata = {
  title: "Aeroplano",
  description: "Aeroplano Design - Joinville",
};

export default function RootLayout({ children }: LayoutProps<"/"> ) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <body className={`${NeoSansPro.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
