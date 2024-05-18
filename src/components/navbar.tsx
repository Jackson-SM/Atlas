import { cn } from '@/lib/utils'
import { Logo } from '@/components/Logo'
import { NavigationMenuDemo } from '@/components/navigation-menu-demo'
import { BellIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Navbar = () => {
  return (
    <header
      className={cn(
        'flex flex-row justify-between items-center p-4 bg-muted border-b-neutral-700',
      )}
    >
      <div>
        <Logo />
      </div>
      <NavigationMenuDemo />
      <div className="flex flex-row gap-2">
        <ButtonRounded>
          <BellIcon width={20} height={20} />
        </ButtonRounded>
        <ButtonRounded>
          <EnvelopeClosedIcon width={20} height={20} />
        </ButtonRounded>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/86308072?v=4"
            alt="Jackson-SM"
          />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export const ButtonRounded = ({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'bg-transparent rounded-full w-10 h-10 flex items-center justify-center transition-colors ease-in-out duration-150 hover:bg-accent',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
