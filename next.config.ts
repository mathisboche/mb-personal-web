// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/daffe',          // mtbh.fr/daf
        destination: 'https://www.echecs.asso.fr/Reglements/Reglements2012/4%205%20DAFFE%201r%20degre.pdf',
        permanent: true,         // 308 / 301 (SEO + cache navigateur)
      },
      {
        source: '/fide',        // mtbh.fr/chess
        destination: 'https://ratings.fide.com/profile/651010240',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
