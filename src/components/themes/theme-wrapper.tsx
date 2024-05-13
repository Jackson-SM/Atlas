'use client'

import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { ReactNode, useEffect } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const ThemeWrapper = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [config] = useConfig()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--radius',
      `${config.radius}rem`,
    )
  }, [config.radius])

  return (
    <div
      className={cn(config.theme && `theme-${config.theme}`, poppins.className)}
    >
      {children}
    </div>
  )
}
