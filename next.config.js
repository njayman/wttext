/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        MONGODB_URL: ""
    }
}

module.exports = nextConfig
