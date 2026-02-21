/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pishkesvatan.net",
      },
    ],
  },
};

module.exports = nextConfig;
