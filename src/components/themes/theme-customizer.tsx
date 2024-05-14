import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { CSSProperties, useEffect, useState } from 'react'
import { themes } from './themes'
import { ArrowRightLeft } from 'lucide-react'
import { ThemeWrapper } from '@/components/themes/theme-wrapper'

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme: mode } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Popover>
      <ThemeWrapper>
        <PopoverTrigger asChild>
          <Button variant="outline">Customize</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 flex flex-col gap-4 bg-primary-foreground">
          <div className="flex flex-row gap-1 justify-between items-center p-2">
            <div>
              <h2 className="text-2xl">Customize</h2>
              <p className="text-md text-muted-foreground">
                Choose a theme that fits your style.
              </p>
            </div>
            <ArrowRightLeft width="20" height="20" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {mounted ? (
              <>
                {themes.map((color) => {
                  const theme = themes.find(
                    (theme) => theme.name === color.name,
                  )
                  const isActive = config.theme === color.name

                  if (!theme) return null

                  return (
                    <Button
                      key={color.name}
                      variant="outline"
                      style={
                        {
                          '--primary': `hsl(${theme.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
                        } as CSSProperties
                      }
                      className={cn(
                        'rounded-b w-full',
                        isActive && 'border-2 border-[--primary]',
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
          </div>
        </PopoverContent>
      </ThemeWrapper>
    </Popover>
  )
}
