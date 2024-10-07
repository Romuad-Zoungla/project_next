/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    unoptimized: true 
  },
  reactStrictMode: true,
  output: 'export', // Ajoute cette ligne pour permettre l'exportation statique
  


};

export default nextConfig;
