import UtilityButton from '@/ui/utilityButton';
import Link from 'next/link';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const MySkills = () => {
  const text = [
    'S',
    'k',
    'i',
    'l',
    'l ',
    's',
    ' ',
    '&',
    ' ',
    'E',
    'x',
    'p',
    'e',
    'r',
    'i',
    'e',
    'n',
    'c',
    'e',
    '!',
  ];
  return (
    <div className="w-3/5 sm:w-full flex flex-col justify-self-center p-2 mb-14 overflow-hidden">
      <p className="text-xxxxxl sm:text-xxl flex font-semibold mt-12 sm:mt-0 animate-fadeIn text-teal-300 cursor-none font-serif">
        Skills & Experience
      </p>
      <div className="sm:w-screen pt-5 pr-4 font-mono italic text-lg sm:text-sm text-indigo-200 animate-fadeIn">
        In second year of my graduation, I did my first work as a freelancer
        working on AutoCad. Later I’ve been working in various projects related
        to the same. In third year of graduation, I got exposed to programming
        and it didn’t take much time for the computer to attract all of my
        attention and interest towards itself. <br />
        <br />
        Since then I’ve done remote work for agencies and firms, consulted for
        startups, and collaborated with talented people to create products for
        both business and consumer use. <br />
        <br />
        I create successful DApps, Apps and Websites that are fast, secure, easy
        to use, and built with best practices. The main area of my expertise is
        blockchain-development, working with libraries like ReactJS, building
        cryptos, staking Dapps and also the games backed by cryptos. <br />{' '}
        <br /> I also have full stack blockchain developer experience using open
        source libraries and sdks like ethersjs, hardhat and moralis. Visit my
        linkedIn for more details or just contact me.
      </div>
    </div>
  );
};

export default MySkills;
