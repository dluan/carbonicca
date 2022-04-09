import type { AppProps } from 'next/app'
import Head from 'next/head'

import { getCssText } from 'styles/config'
import { globalStyles } from 'styles/global'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carbonicca</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Produtora digital de design, sites, sistemas e aplicativos."
        />
        <meta name="theme-color" content="#06092b" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
