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
          <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap' />
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
