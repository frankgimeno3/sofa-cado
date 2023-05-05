import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Phershian' }: Props) => {
  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', documentHeight)
    documentHeight()
  }, []);

  return (
    <div className='min-h-screen'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='theme-color' content='#05203D' />
        <link rel="icon" type='image/x-icon' href="/img/keyboard_key_f.png" />
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
export default Layout
