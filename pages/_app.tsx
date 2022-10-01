import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
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

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
					<script 
						src="https://cdn.counter.dev/script.js"
						data-id="1d10a130-fe53-4bcf-aab7-c08d262eac2f"
						data-utcoffset="2"
					></script>
				`,
        }}
      />
    </>
  )
}
