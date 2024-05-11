'use client'

import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'

export const ThemeWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [config] = useConfig()
  const { theme } = config

  return <div className={cn(theme && `theme-${theme}`)}>{children}</div>
}
