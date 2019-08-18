import Document, { Head, Main, NextScript } from "next/document";

class FireactDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Patua+One&display=swap" rel="stylesheet" />

        </Head>
        
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
      body { 
        margin: 0;
        padding: 0;
        background: linear-gradient(120deg, #F08349 25%, #F64A65 75%);
        font-size: 14px;
        min-width: 100vw;
        min-height: 100vh;
        
      }
      main {
        
        padding: 0 1em;
        padding-top: 52px; // header Height
        box-sizing: border-box;
        padding-bottom: 52px;
      }
    `}</style>
        <body>
          <Main />
          <NextScript />
          <script>{`
                window.addEventListener("load",function() {
                  setTimeout(function(){
                      // This hides the address bar:
                      window.scrollTo(0, 1);
                  }, 0)
              });
        `}

        </script>
        </body>
      </html>
    )
  }
};
export default FireactDocument