import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(
      '%c Welcome fellow developer!😉',
      'font-size: 20px; font-family: arial; color: #8C00CE;'
    );
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className=" min-h-screen min-w-screen bg-gradient-to-r from-[#030129] to-[#040311] flex sm:flex-col 4k:flex-col z-10">
        <Head>
          <title>AM | Blockchain Developer | Web & Android Developer</title>
        </Head>
        <Navbar />
        <div className="fixed w-1/6 h-screen sm:hidden 4k:hidden">
          <Sidebar />
        </div>
        <div className="ml-56 pl-5 md:ml-28 md:pl-0 sm:pl-0 sm:ml-0 4k:pl-0 4k:ml-0 z-10 w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
