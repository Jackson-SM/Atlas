import '@/components/themes/themes.css'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { ThemeWrapper } from '@/components/themes/theme-wrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="theme"
    >
      <ThemeWrapper defaultTheme="red">
        <Component {...pageProps} />
      </ThemeWrapper>
    </ThemeProvider>
  )
}
