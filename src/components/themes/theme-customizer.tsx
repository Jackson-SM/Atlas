import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ThemeWrapper } from './theme-wrapper'
import { themes } from './themes'

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Customize</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ThemeWrapper>
          <h1>Current Theme: {config.theme ? config.theme : 'Zinc'}</h1>
          {mounted ? (
            <>
              {['blue', 'violet', 'orange', 'slate', 'zinc'].map((color) => {
                const theme = themes.find((theme) => theme.name === color)
                const isActive = config.theme === color

                if (!theme) return null

                return (
                  <Button
                    key={color}
                    variant="outline"
                    style={
                      {
                        '--theme-primary': `hsl(${theme.activeColor[mode === 'dark' ? 'dark' : 'light']})`,
                      } as React.CSSProperties
                    }
                    className={cn(
                      'rounded-full border-2 text-xs',
                      isActive && 'border-[--theme-primary]',
                    )}
                    onClick={() => {
                      setConfig({
                        ...config,
                        theme: theme.name,
                      })
                    }}
                  >
                    {theme.label}
                  </Button>
                )
              })}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </ThemeWrapper>
      </PopoverContent>
    </Popover>
  )
}
