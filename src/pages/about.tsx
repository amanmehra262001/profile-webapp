import type { NextPage } from 'next';
import AboutMe from '@/components/about-me';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="flex ml-5 justify-evenly flex-col overflow-hidden">
      <Head>
        <title>AM | Blockchain Developer: About</title>
      </Head>
      <AboutMe />
    </div>
  );
};

export default About;
