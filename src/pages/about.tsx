import type { NextPage } from 'next';
import AboutMe from '@/components/about-me';

const About: NextPage = () => {
  return (
    <div className="flex ml-5 justify-evenly flex-col overflow-hidden">
      <AboutMe />
    </div>
  );
};

export default About;
