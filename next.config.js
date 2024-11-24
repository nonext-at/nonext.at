/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.externals = [...config.externals, { canvas: 'canvas' }];
      return config;
    },
  }
  
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer({});
  
  
  module.exports = nextConfig