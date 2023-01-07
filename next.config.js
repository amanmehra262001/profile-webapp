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
});