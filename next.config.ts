import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

// Behind the IIS reverse proxy the app may see 127.0.0.1 as its host, so name the public
// host explicitly or server actions (enquiry and resume forms) are rejected as cross-origin.
const publicHost = (() => {
  try {
    return process.env.NEXT_PUBLIC_SERVER_URL ? new URL(process.env.NEXT_PUBLIC_SERVER_URL).host : undefined
  } catch {
    return undefined
  }
})()

const nextConfig: NextConfig = {
  // Small self-contained server bundle: deploy\windows\deploy.ps1 ships only this
  output: 'standalone',
  // Keep secrets, uploads and repo files out of the traced server bundle
  outputFileTracingExcludes: {
    '*': ['.env*', 'media/**', 'deploy/**', 'README.md', '*.tsbuildinfo', 'eslint.config.mjs'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/webp'], // AVIF is much heavier to generate
    minimumCacheTTL: 31536000, // generate each image size once
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // drop 2048 and 3840
    localPatterns: [{ pathname: '/api/media/file/**' }, { pathname: '/assets/**' }],
    qualities: [75, 85],
  },
  experimental: {
    cpus: 4, // limits build workers (and the DB connections they could open)
    serverActions: {
      bodySizeLimit: '6mb', // resumes up to 5 MB
      ...(publicHost ? { allowedOrigins: [publicHost] } : {}),
    },
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/assets/:path*',
        // Filenames aren't hashed, so cache for a week rather than forever
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ]
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
