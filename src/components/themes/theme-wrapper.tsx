'use client'

import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { ComponentProps } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export type ThemeWrapperProps = ComponentProps<'div'> & {
  defaultTheme?: string
}

export const ThemeWrapper = ({ children, defaultTheme }: ThemeWrapperProps) => {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        config.theme && `theme-${defaultTheme || config.theme}`,
        poppins.className,
      )}
    >
      {children}
    </div>
  )
}
