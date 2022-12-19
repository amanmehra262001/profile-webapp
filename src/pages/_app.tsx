import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Image from 'next/image';
// import bg from '../assets/bg.webp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <div className="h-screen w-screen fixed z-0 opacity-50 overflow-hidden sm:hidden md:hidden ">
        <Image src={bg} />
      </div> */}
      <div className=" min-h-screen min-w-screen bg-gradient-to-r from-[#030129] to-[#040311] flex sm:flex-col 4k:flex-col z-10">
        <Head>
          <title>AboutMe</title>
        </Head>
        <Navbar />
        <div className="fixed w-1/6 h-screen sm:hidden 4k:hidden">
          <Sidebar />
        </div>
        <div className="ml-56 pl-5 md:ml-28 md:pl-0 sm:pl-0 sm:ml-0 4k:pl-0 4k:ml-0 z-10 w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
// bg-gradient-to-r from-[#030129] to-[#040311]
