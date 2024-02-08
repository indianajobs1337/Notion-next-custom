// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG} class="dark">
        <Head>
          <link rel="icon" href={`${BLOG.BLOG_FAVICON}`} />
          <CommonScript />
          {/* 预加载字体 */}
          {BLOG.FONT_AWESOME && (
            <>
              <link
                rel="preload"
                href={BLOG.FONT_AWESOME}
                as="style"
                crossOrigin="anonymous"
              />
              <link
                rel="stylesheet"
                href={BLOG.FONT_AWESOME}
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </>
          )}

          {BLOG.FONT_URL?.map((fontUrl, index) => {
            if (fontUrl.endsWith('.css')) {
              return <link key={index} rel="stylesheet" href={fontUrl} />
            } else {
              return (
                <link
                  key={index}
                  rel="preload"
                  href={fontUrl}
                  as="font"
                  type="font/woff2"
                />
              )
            }
          })}
        </Head>

        <body
          className={`${BLOG.FONT_STYLE} font-light scroll-smooth bg-[#18171d]`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
