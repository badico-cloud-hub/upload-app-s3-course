/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  excludeFile: str => /\*.{spec,test,stories}.tsx/.test(str),
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.stories.ts$/,
        loader: 'ignore-loader',
      }
    );
    return config;
  }
};

module.exports = nextConfig;
