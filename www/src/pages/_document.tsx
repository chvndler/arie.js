import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {getCssText} from '../../theme'

class App extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <style id={'stitches'} dangerouslySetInnerHTML={{__html: getCssAndReset()}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default App

const getCssAndReset = () => {
  const css = getCssText()
  return css
}
