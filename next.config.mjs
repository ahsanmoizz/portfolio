/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // keep only if you're using the app router
  },
};

export default nextConfig;
