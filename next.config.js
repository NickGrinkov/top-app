/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 6000
};

const webpack = (config) =>  {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.(js|ts)x?$/,
    use: ["@svgr/webpack"],
  });

  return config;
};



module.exports = {
  nextConfig,
  images: {
    domains: ['courses-top.ru']
  },
  webpack,
};
