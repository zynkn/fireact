import * as React from 'react'

import Head from 'next/head'
import Header from './common/Header';
import Tabbar from './common/Tabbar';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div className="FireactApp">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Tabbar />

      <style jsx>{
        `

        .FireactApp{
          
        }
        `
      }
      </style>
    </div>

  )

export default Layout
