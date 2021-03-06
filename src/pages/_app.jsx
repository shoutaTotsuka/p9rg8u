import React from 'react'
import Head from 'next/head'
import '~/styles/global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='robots' content='noindex, nofollow, noarchive' />
      <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
    </Head>
    <Component {...pageProps} />
  </>
)


export default App
