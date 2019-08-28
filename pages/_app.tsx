import App, { Container } from "next/app";
import React from "react";



class FireactApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps}></Component>
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
        max-width: 768px;
      }
      h1, h2, h3, h4, h5, p {
        padding: 0;
        margin: 0;
      }
    `}</style>
      </Container>
    )
  }
}

export default FireactApp;