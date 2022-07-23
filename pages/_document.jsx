import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicons/apple-touch-icon.png"
        />

        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
