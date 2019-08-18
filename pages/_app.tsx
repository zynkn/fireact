import App, { Container } from "next/app";
import React from "react";
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

import Router from 'next/router'
import withGA from 'next-ga'

import NextI18NextInstance from '../i18n'

class FireactApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <Component {...pageProps}></Component>
        <style jsx global>{`
      
    `}</style>
      </Container>
    )
  }
}

export default withGA('UA-xxxxxxxxx-1', Router)(NextI18NextInstance.appWithTranslation(FireactApp))