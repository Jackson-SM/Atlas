import { AvatarDemo } from '@/components/AvatarDemo'
import { Logo } from '@/components/Logo'
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo'
import { ThemeToggle } from '@/components/themes/ThemeToogle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BellIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { ThemeCustomizer } from './themes/theme-customizer'

export const Navbar = () => {
  return (
    <header className={cn('flex flex-row justify-between p-4 bg-transparent')}>
      <div>
        <Logo />
      </div>
      <NavigationMenuDemo />

      <div className="flex flex-row justify-center items-center gap-2">
        <ButtonIcon>
          <BellIcon width="16" height="16" />
        </ButtonIcon>
        <ButtonIcon>
          <EnvelopeClosedIcon width="16" height="16" />
        </ButtonIcon>
        <ThemeToggle />
        <ThemeCustomizer />
        <AvatarDemo src="https://avatars.githubusercontent.com/u/86308072?v=4" />
      </div>
    </header>
  )
}

export const ButtonIcon = ({
  children,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      className="flex justify-center items-center bg-transparent"
      variant="outline"
      size="icon"
      {...props}
    >
      {children}
    </Button>
  )
}
