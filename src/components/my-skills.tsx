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
      <p className="text-xxxxxl sm:text-xxl flex font-semibold mt-12 sm:mt-0 mb-8 animate-fadeIn font-serif text-teal-300 cursor-none">
        {/* {text.map((letter, i) => (
          <div className="flex" key={i}>
            <p className="font-serif hover:animate-wiggle text-teal-300 cursor-none">
              {letter}
            </p>
          </div>
        ))} */}
        Skills & Experience
      </p>
      <div className="w-4/5 sm:w-screen p-5 font-mono italic text-lg sm:text-sm text-indigo-200 animate-fadeIn">
        When I was in second year of my graduation, I got my first work as a
        freelance working on AutoCad. After that I’ve done various projects
        related to the same. Later in my third year of graduation, I got exposed
        to programming and it didn’t take much time for the computer to suck all
        my attention and interest towards itself. <br />
        <br />
        Since then I’ve done remote work for agencies and firms, consulted for
        startups, and collaborated with talented people to create products for
        both business and consumer use. <br />
        <br />
        I create successful DApps, websites and games that are fast, secure,
        easy to use, and built with best practices. The main area of my
        expertise is blockchain-development, working with libraries like
        ReactJS, building cryptos, staking dapps and also the game based on
        cryptos. <br /> <br /> I also have full stack blockchain developer
        experience using open source libraries and sdks like ethersjs, hardhat
        and moralis. Visit my --- for more details or just contact me.
      </div>
      {/* <div>
        <div className="font-mono italic flex text-xl text-teal-400 mt-9 ml-9">
          <p>Visit my&nbsp;</p>
          <Link href="/">
            <u>---</u>
          </Link>
          <p>&nbsp;for more details or just&nbsp;</p>
          <Link href="/">
            <u>contact</u>
          </Link>
          <p>&nbsp;me.</p>
        </div>
      </div> */}
    </div>
  );
};

export default MySkills;
