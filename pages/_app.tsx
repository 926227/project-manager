import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import { ThemeProviderWithColorMode } from '../lib/context/ThemeProviderWithColorMode'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PM</title>
      </Head>
      <ThemeProviderWithColorMode>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProviderWithColorMode>
    </>
  )
}

export default MyApp
