import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  // static async getServerSideProps(context) {
  //   const initialProps = await Document.getServerSideProps(context)
  //   return { ...initialProps }
  // }
  static async getStaticProps(context) {
    const initialProps = await Document.getStaticProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='dns-prefetch' href='//www.google.co.jp' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
