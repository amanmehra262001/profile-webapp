import type { NextComponentType } from 'next';
import MenuButton from '../ui/menuButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import hacker from '../assets/hacker-modified.png';
import Image from 'next/image';
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { GIT_HUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from '@/constants/constants';

const Sidebar: NextComponentType = () => {
  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center border-r-2 border-dotted border-violet-500 text-grey-500 animate-fadeIn"
        style={{ minWidth: '16%' }}
      >
        <Link href="/">
          <div className="mt-9 mb-5 flex flex-col items-center cursor-pointer">
            <Image src={hacker} alt="me" width="70%" height="70%" />
            <div className="mt-4 text-xxxxl font-semibold text-indigo-200">
              Aman
            </div>
            <div className="text-lg text-indigo-300">Blockchain Developer</div>
          </div>
        </Link>
        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {' '}
          <MenuButton name="About" linked="/about" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {' '}
          <MenuButton name="Skills" linked="/skills" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {' '}
          <MenuButton name="Work" linked="/work" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {' '}
          <MenuButton name="Contact" linked="/contact" />
        </motion.div>
        <motion.div className="mt-9 w-1/3 text-indigo-200 flex justify-between">
          <a href={GIT_HUB_LINK} target="_blank">
            <FontAwesomeIcon
              className="hover:text-cyan-300"
              icon={faGithub}
              // size="2x"
            />
          </a>
          <a href={LINKEDIN_LINK} target="_blank">
            <FontAwesomeIcon
              className="hover:text-cyan-300"
              icon={faLinkedin}
              // size="2x"
            />
          </a>
          <a href={GMAIL_LINK} target="_blank">
            <FontAwesomeIcon
              className="hover:text-cyan-300"
              icon={faEnvelope}
              // size="2x"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
