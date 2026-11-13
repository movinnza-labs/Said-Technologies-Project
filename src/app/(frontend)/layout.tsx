import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import type { ReactNode } from 'react'
import type { SiteSetting } from '@/payload-types'
import { SiteEffects } from '@/components/layout/SiteEffects'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { JsonLd } from '@/components/ui/JsonLd'
import { getGlobal } from '@/lib/data'
import { getNavigation } from '@/lib/navigation'
import { isDraft } from '@/lib/payload'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { getSiteUrl } from '@/lib/urls'

import '@/styles/tokens.css'
import '@/styles/base.css'
import '@/styles/ui.css'
import '@/styles/motion.css'
import './frontend.css'

// Self-hosted (Latin, variable weight; SIL Open Font License) rather than next/font/google:
// Turbopack on Windows fails to build Google fonts, and the build then needs no internet access.
const inter = localFont({
  src: './fonts/inter-latin-var.woff2',
  weight: '400 700',
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})
const jakarta = localFont({
  src: './fonts/plus-jakarta-sans-latin-var.woff2',
  weight: '500 800',
  variable: '--font-jakarta',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: 'SAID Technologies',
  icons: {
    icon: [
      { url: '/assets/img/favicon-32x32.jpg', sizes: '32x32' },
      { url: '/assets/img/favicon-192x192.jpg', sizes: '192x192' },
    ],
    apple: '/assets/img/favicon-180x180.jpg',
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#f4faf8',
  width: 'device-width',
  initialScale: 1,
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  const [nav, settings, draft] = await Promise.all([getNavigation(), getGlobal<SiteSetting>('site-settings'), isDraft()])

  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      {/* Browser extensions (e.g. Grammarly) add attributes to <body> before React loads */}
      <body suppressHydrationWarning>
        {/* Enables reveal animations only when JS runs, so content never stays hidden */}
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {draft && (
          <div className="preview-bar" role="status">
            {/* Route handler: needs a full request, not client navigation */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            Previewing unpublished content · <a href="/next/exit-preview">Exit preview</a>
          </div>
        )}
        <SiteEffects />
        <SiteHeader nav={nav} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter settings={settings} />
        <JsonLd data={[organizationSchema(settings), websiteSchema(settings)]} />
      </body>
    </html>
  )
}
