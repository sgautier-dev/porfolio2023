import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sébastien Gautier',
    default:
      'Développeur Web à la Réunion - Sébastien Gautier - Fullstack, Trail et Méditation',
  },
  description:
    'Sébastien Gautier, développeur web à la Réunion. Méditant expérimenté, je crée des sites et applications web modernes et performantes. Expertise humaine et technique à votre service.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  authors: [{ name: 'Sébastien Gautier', url: 'https://www.sgautier.dev' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-cyan-700 dark:bg-cyan-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
