import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { navigation } from '@/lib/navigation'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-slate-100 pb-16 pt-10 dark:border-slate-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                {navigation.map((item) => (
                  <NavLink key={item.name} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} Sébastien Gautier. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
