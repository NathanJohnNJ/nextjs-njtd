/** @type {import('next').NextConfig} */
import withSvgr from "next-svgr";

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        }
      },
      resolveAlias: {
        'react-native': 'react-native-web',
        'react-native-svg': 'react-native-svg-web'
      }
    }
  }
};

export default withSvgr(nextConfig);
