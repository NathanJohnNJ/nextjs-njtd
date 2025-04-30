/** @type {import('next').NextConfig} */
const withSvgr = require("next-plugin-svgr");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      }
    }
  },
  experimental: {
    optimizePackageImports: ['motion', 'tailwindcss', 'autoprefixer', 'eslint', '@svgr/webpack', 'next-plugin-svgr'],
    webpackMemoryOptimizations: true,
  }
};



module.exports = withPlugins([withSvgr], nextConfig);