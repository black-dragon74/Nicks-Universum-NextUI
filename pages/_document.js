import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return super.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* dangerously set HTML for dark mode local storage */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  // Exit if window is undefined
                  if (typeof window === 'undefined') {
                    return;
                  }

                  // Add event listener for when user changes system theme
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                    if (e.matches) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  });

                })()
            `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
