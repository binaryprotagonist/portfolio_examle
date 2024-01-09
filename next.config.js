/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  env: {
    basePath: "http://localhost:3000/api",
  },
};

module.exports = nextConfig;
