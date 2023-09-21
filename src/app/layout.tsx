import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sébastien Gautier',
    default:
      'Développeur Web à la Réunion - Sébastien Gautier - Dev Fullstack, Trail et Bien-Être',
  },
  description:
    'Rencontrez Sébastien Gautier, un développeur web spécialisé en Next.js 13, TypeScript et TailwindCSS à La Réunion. Il allie excellence technique et sensibilité humaine pour créer des applications web sécurisées, performantes et robustes.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
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
