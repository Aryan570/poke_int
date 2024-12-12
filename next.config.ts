import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns : [{
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      // port: '',
      // pathname: '/account123/**',
    }, {
      hostname : "pokeapi.co"
    }]
  }
};

export default nextConfig;
