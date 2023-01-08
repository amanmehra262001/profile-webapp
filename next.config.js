/** @type {import('next').NextConfig} */

module.exports = {
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
};