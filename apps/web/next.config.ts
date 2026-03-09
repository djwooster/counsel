import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@counsel/ui', '@counsel/db'],
}

export default nextConfig
