
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
