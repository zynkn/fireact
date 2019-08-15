import App, { Container } from "next/app";
import React from "react";

export default class FireactApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps}></Component>
        <style jsx global>{`
      
    `}</style>
      </Container>
    )
  }
}