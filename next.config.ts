import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  output: "standalone",

=======
  output: 'standalone',
>>>>>>> 8044324 (fix: add standalone to next build config)
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;