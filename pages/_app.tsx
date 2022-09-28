import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'
import { mantineTheme } from '../lib/theme'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Pavel Srom</title>
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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  )
}
