import type { NextComponentType } from 'next';
import MenuButton from '../ui/menuButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import hacker from '../assets/hacker-modified.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar: NextComponentType = () => {
  return (
    <nav className=" w-full h-2/5 flex sm:flex-col 4k:flex-col items-center justify-evenly flex-wrap p-6 md:hidden lg:hidden xl:hidden 2xl:hidden">
      <Link href="/">
        <motion.div
          className="ml-4 mb-9 flex"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <Image src={hacker} alt="me" width="70%" height="70%" />
          <div className="ml-4 mt-4 text-xl font-semibold text-indigo-200 justify-evenly">
            <p>Aman</p>
            <div className="text-sm text-indigo-300">Blockchain Developer</div>
          </div>
        </motion.div>
      </Link>
      <div className="w-4/5 flex items-center justify-between">
        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
        >
          {' '}
          <MenuButton name="About" linked="/about" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          {' '}
          <MenuButton name="Skill" linked="/skills" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.7,
          }}
        >
          {' '}
          <MenuButton name="Work" linked="/work" />
        </motion.div>

        <motion.div
          className="mb-3 mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          {' '}
          <MenuButton name="Contact" linked="/contact" />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
