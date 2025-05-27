import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // DAFFE & FIDE
      { source: '/daffe', destination: 'https://www.echecs.asso.fr/Reglements/Reglements2012/4%205%20DAFFE%201r%20degre.pdf', permanent: true },
      { source: '/fide', destination: 'https://ratings.fide.com/profile/651010240', permanent: true },

      // INSTAGRAM
      { source: '/ig', destination: 'https://www.instagram.com/mathis.boche/', permanent: true },
      { source: '/instagram', destination: 'https://www.instagram.com/mathis.boche/', permanent: true },

      // LINKEDIN
      { source: '/in', destination: 'https://www.linkedin.com/in/mathisboche/', permanent: true },
      { source: '/linkedin', destination: 'https://www.linkedin.com/in/mathisboche/', permanent: true },

      // GITHUB
      { source: '/gh', destination: 'https://github.com/MathisBoche', permanent: true },
      { source: '/github', destination: 'https://github.com/MathisBoche', permanent: true },

      // EMAIL
      { source: '/mail', destination: 'mailto:mathis@boche.co', permanent: true },
      { source: '/email', destination: 'mailto:mathis@boche.co', permanent: true },
    ]
  },
}

export default nextConfig
