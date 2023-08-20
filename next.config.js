/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      os: false,
      'pino-pretty': false,
      encoding: false,
      lokijs: false,
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
