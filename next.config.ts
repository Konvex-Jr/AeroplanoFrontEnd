import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    // AVIF é bem menor que WebP; o Next serve o melhor formato que o navegador aceitar.
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
    // Imagens do /public raramente mudam: o navegador/CDN podem reutilizar a versão otimizada por 30 dias.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
