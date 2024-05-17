import { cn } from '@/lib/utils'
import { Logo } from '@/components/Logo'

export const Navbar = () => {
  return (
    <header
      className={cn(
        'flex flex-row justify-between p-4 bg-transparent border-b-neutral-700 border-2',
      )}
    >
      <div>
        <Logo />
      </div>
      <span>Options</span>
    </header>
  )
}
