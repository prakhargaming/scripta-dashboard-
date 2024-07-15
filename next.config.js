/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader',
      });
      return config;
    },
    // Enable image optimization
    images: {
      domains: ['example.com'], // Add any domains you're loading images from
    },
    // If you're using environment variables, you can configure them here
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    // If you need to support older browsers, you might want to add polyfills
    experimental: {
      forceSwcTransforms: true,
    },
  };
  
  module.exports = nextConfig;