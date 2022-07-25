import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { CssBaseline } from '@mui/material'
import { Layout } from '../components/layout/Layout'
import { ThemeProviderWithColorMode } from '../lib/context/ThemeProviderWithColorMode'
import type { AppProps } from 'next/app'

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

export default appWithTranslation(MyApp)
