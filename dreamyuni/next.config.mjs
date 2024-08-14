/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['via.placeholder.com'],
    },
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
  };
  
  export default nextConfig;