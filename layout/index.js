'use client'

import Head from 'next/head';
import Header from './Header'
import Footer from './Footer';
import SubFooter from './SubFooter';


export default function RootLayout({ children}) {
    return (
      <>
        <Head>
            <title>Barfresh Naturals</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="https://cdn.tailwindcss.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script>
              AOS.init();
            </script>
        </Head>
        <div suppressHydrationWarning={true}>
            <div className={`scroll-smooth overflow-x-hidden`}>
                <Header />
                <div className='pt-24'>
                    {children}
                </div>
                <SubFooter />
                <Footer />
            </div>
        </div>
      </>
    )
  }