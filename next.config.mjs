/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "skillslash-cdn.s3.ap-south-1.amazonaws.com",
      "skillslash-cdn.s3.ap-south-1.amazonaws.com",
    ],
    minimumCacheTTL: 120,
  },
};

export default nextConfig;
