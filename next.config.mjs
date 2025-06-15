/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Add this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
