/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rkb.jp",
        port: "",
        pathname: "/rkb/wp-content/uploads/2022/08/image8-4.jpg",
      },
    ],
  },
};
