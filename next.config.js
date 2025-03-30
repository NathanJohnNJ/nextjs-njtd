/** @type {import('next').NextConfig} */
const withSvgr = require("next-plugin-svgr");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'tailwindcss', 'autoprefixer', 'eslint', '@svgr/webpack'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        }
      }
    },
    webpackMemoryOptimizations: true,
  }
};



module.exports = withPlugins([withBundleAnalyzer, withSvgr], nextConfig);