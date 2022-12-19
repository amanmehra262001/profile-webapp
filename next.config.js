/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        loader: 'default',
        domains: [
            'localhost',
            'gateway.pinata.cloud',
            'firebasestorage.googleapis.com',
            '',
            'i.seadn.io',
            'picsum.photos',
        ],
    },
    async redirects() {
        return [{
            source: '/farms',
            destination: '/',
            permanent: false,
        }, ];
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching,
    },
    ...(process.env.NODE_ENV === 'production' && {
        typescript: {
            ignoreBuildErrors: true,
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
    }),
});