/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['src'], // Only run ESLint on these directories
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: [],
    },
    async redirects() {
        return [
            {
                source: '/auth/login',
                destination: '/auth',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
// export default nextConfig