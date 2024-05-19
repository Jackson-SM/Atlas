import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'
import { MagicWandIcon, SymbolIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { CSSProperties, useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
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
      <PopoverTrigger asChild className="bg-transparent">
        <Button variant="outline" className="flex flex-row gap-2">
          <MagicWandIcon width={18} height={18} />
          Customize
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-4 bg-background">
        <ThemeWrapper>
          <div className="flex flex-row gap-1 justify-between items-center p-2">
            <div>
              <h2 className="text-2xl">Customize</h2>
              <p className="text-md text-muted-foreground">
                Choose a theme that fits your style.
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <SymbolIcon width="20" height="20" />
            </Button>
          </div>
          <Separator orientation="horizontal" />
          <div>
            <h3 className="text-lg m-2 my-4">Themes</h3>
            <div className="grid grid-cols-3 auto-rows-auto gap-2">
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
                        size="icon"
                        style={
                          {
                            '--theme-primary': `hsl(${theme.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
                          } as CSSProperties
                        }
                        className={cn(
                          'rounded-b w-full flex justify-between items-center p-2 gap-1 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                          isActive && 'border border-[--border]',
                        )}
                        onClick={() => {
                          setConfig({
                            ...config,
                            theme: theme.name,
                          })
                        }}
                      >
                        <Circle className="bg-[--theme-primary]" />
                        {theme.label}
                      </Button>
                    )
                  })}
                </>
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </ThemeWrapper>
      </PopoverContent>
    </Popover>
  )
}

export const Circle = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('w-4 h-4 p-2 rounded-full bg-primary', className)}
      {...props}
    ></div>
  )
}
