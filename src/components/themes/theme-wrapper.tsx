'use client'

import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { useEffect } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const ThemeWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [config] = useConfig()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--radius',
      `${config.radius}rem`,
    )
  }, [])

  return (
    <div
      className={cn(config.theme && `theme-${config.theme}`, poppins.className)}
    >
      {children}
    </div>
  )
}
