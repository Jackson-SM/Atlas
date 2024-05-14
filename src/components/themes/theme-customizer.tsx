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
        <div className="flex flex-row gap-1 justify-between items-center p-2">
          <div>
            <h2 className="text-2xl">Customize</h2>
            <p className="text-accent">Choose a theme that fits your style.</p>
          </div>
          <ArrowRightLeft width="20" height="20" />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {mounted ? (
            <>
              {themes.map((color) => {
                const theme = themes.find((theme) => theme.name === color.name)
                const isActive = config.theme === color.name

                if (!theme) return null

                return (
                  <Button
                    key={color.name}
                    variant="outline"
                    style={
                      {
                        '--theme-primary': `hsl(${theme.activeColor[mode === 'dark' ? 'dark' : 'light']})`,
                      } as CSSProperties
                    }
                    className={cn(
                      'rounded-b w-full',
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
        </div>
      </PopoverContent>
    </Popover>
  )
}
