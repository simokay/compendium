/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/compendium",
  output: "export",
  reactStrictMode: true,
  "@next/next/no-img-element": "off"
};

module.exports = nextConfig;