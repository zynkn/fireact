import Document, { Head, Main, NextScript } from "next/document";

class FireactDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="theme-color" content="#382A58" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          {/* <link href="https://fonts.googleapis.com/css?family=Patua+One&display=swap" rel="stylesheet" /> */}
          <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
        *{
          user-select: none;
        }
      body { 
        margin: 0;
        padding: 0;
        font-size: 14px;
        min-width: 100vw;
        min-height: 100vh;
        background-color: #382B4D;
        font-family: Noto Sans KR;
        
      }
      main {
        //padding-top: 52px; // header Height
        box-sizing: border-box;
        padding-bottom: 52px;
      }
      h1, h2, h3, h4, h5, p {
        padding: 0;
        margin: 0;
      }
    `}</style>
                  </Head>

        
        <body>
          <Main />
          <NextScript />

        </body>
      </html>
    )
  }
};
export default FireactDocument