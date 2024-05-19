import SvgLogo from '@/components/icons/svg-logo'
import { cn } from '@/lib/utils'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: '400' })

export const Logo = () => {
  return (
    <div
      className={cn('flex flex-row gap-0.5 items-center', quicksand.className)}
    >
      {' '}
      <SvgLogo height="40" width="40" /> <h1 className="text-2xl">Atlas</h1>{' '}
    </div>
  )
}
