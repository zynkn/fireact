import App, { Container } from "next/app";
import React from "react";



class FireactApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps}></Component>
      </Container>
    )
  }
}

export default FireactApp;