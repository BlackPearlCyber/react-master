/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/react-master',
    assetPrefix: isDev ? '' : '/react-master',
};

export default nextConfig;