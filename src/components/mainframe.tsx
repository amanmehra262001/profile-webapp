import UtilityButton from '@/ui/utilityButton';
import styles from '../styles/External.module.css';
import { motion } from 'framer-motion';

const Mainframe = () => {
  return (
    <motion.div
      className={`${styles.bg} flex flex-col sm:ml-0 mt-14 pl-10 sm:pl-0 pb-10 sm:pb-0`}
      initial={{
        opacity: 0.1,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.2 }}
    >
      <div className="text-vxxxl font-semibold text-indigo-200">
        <motion.div
          className="flex"
          initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            H
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            i
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            !
          </p>
        </motion.div>
        <motion.div
          className="flex"
          initial={{
            x: -1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            I
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            '
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            m&nbsp;
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-fuchsia-500 cursor-none">
            A
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            m
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            a
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            n
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            ,
          </p>
        </motion.div>
        <motion.div
          className="flex"
          initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="font-serif hover:animate-wiggle hover:text-fuchsia-900 cursor-none">
            B
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            l
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            o
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            c
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            k
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            c
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            h
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            a
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            i
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            n&nbsp;
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-violet-900 cursor-none">
            D
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            e
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            v
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            e
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            l
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            o
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            p
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            e
          </p>
          <p className="font-serif hover:animate-wiggle hover:text-teal-500 cursor-none">
            r
          </p>
        </motion.div>
      </div>
      <motion.div
        className="text-neutral-500 text-xxxxl sm:text-xxxxxl sm:ml-0 ml-12"
        initial={{
          x: -1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        Web Developer / Game Developer
      </motion.div>
      <motion.div
        initial={{
          scale: 2,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <UtilityButton width="w-1/4" name="Contact Me" linked="/contact" />
      </motion.div>
    </motion.div>
  );
};

export default Mainframe;
