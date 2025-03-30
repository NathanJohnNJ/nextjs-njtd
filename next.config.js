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



// module.exports = withPlugins([withBundleAnalyzer, withSvgr], nextConfig);
const config = withPlugins([withBundleAnalyzer], nextConfig);

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  }
}