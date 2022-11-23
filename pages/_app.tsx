import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import '../styles/globals.css'
import { mantineTheme } from 'lib/theme'
import { setLanguage } from 'lib/translation'
import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { useEffect } from 'react'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang) {
      setLanguage(lang)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        // withGlobalStyles
        withNormalizeCSS
        theme={mantineTheme}
      >
        <NotificationsProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NotificationsProvider>
      </MantineProvider>

      <Analytics />
    </>
  )
}
