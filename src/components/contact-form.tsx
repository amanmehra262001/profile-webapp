import UtilityButton from '@/ui/utilityButton';
import { motion } from 'framer-motion';
import styles from '@/styles/External.module.css';

const ContactForm = () => {
  const text = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!'];
  return (
    <div className="w-full sm:w-4/5 flex flex-col justify-self-center ml-5 mb-10 sm:mr-14">
      <p className="w-full text-xxxxxl sm:text-xxl flex font-semibold mt-12 sm:mt-0 animate-fadeIn font-serif text-teal-300 cursor-none">
        {/* {text.map((letter, i) => (
          <div className="flex" key={i}>
            <p className="font-serif hover:animate-wiggle text-teal-300 cursor-none">
              {letter}
            </p>
          </div>
        ))} */}
        Contact Me
      </p>
      <div className="w-1/2 sm:w-full flex flex-col font-mono italic mt-5 ml-7 sm:ml-4 text-lg sm:text-sm text-indigo-200">
        <p className="mb-2 text-xl font-bold not-italic animate-fadeIn">
          Drop me a line
        </p>
        <p className="mb-10 animate-fadeIn">
          I’m interested in opportunities – especially ambitious or large
          projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <div className="flex">
          <input
            type="text"
            className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 mr-2 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="First Name"
          />
          <input
            type="text"
            className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
          placeholder="Subject"
        />
        <input
          type="text"
          className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
          placeholder="Description"
        />
        <div className="w-full animate-fadeIn">
          <UtilityButton name="Submit" linked="/" width="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
