import { CalendarDemo } from '@/components/calendar-demo'
import { ThemeWrapper } from '@/components/themes/theme-wrapper'
import { Button } from '@/components/ui/button'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <ThemeWrapper>
      <Button className={poppins.className}>Button Theming</Button>
      <CalendarDemo />
      <h1>Hello</h1>
    </ThemeWrapper>
  )
}
