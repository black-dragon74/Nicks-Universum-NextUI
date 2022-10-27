import Document, { Head, Html, Main, NextScript } from 'next/document'

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
                  
                  // Lambdas responsible for setting and removing the dark mode class
                  const handleMatch = () => document.documentElement.classList.add('dark');
                  const handleNoMatch = () => document.documentElement.classList.remove('dark');

                  
                  const darkEv = window.matchMedia('(prefers-color-scheme: dark)')
                  darkEv.matches ? handleMatch() : handleNoMatch();

                  darkEv.addEventListener('change', (e) => {
                    if (window.userHasCustomDarkModePref === true) return

                    e.matches ? handleMatch() : handleNoMatch();
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
