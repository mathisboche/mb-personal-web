// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/daf',          // mtbh.fr/daf
        destination: 'https://ratings.fide.com/profile/651010240',
        permanent: true,         // 308 / 301 (SEO + cache navigateur)
      },
      {
        source: '/chess',        // mtbh.fr/chess
        destination: 'https://ratings.fide.com/profile/651010240',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
