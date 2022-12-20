import Link from 'next/link';
import Image from 'next/image';
import Me from '../assets/myPhoto.jpg';
import styles from '../styles/External.module.css';

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col justify-self-center pl-5 overflow-hidden">
      <div className="flex sm:flex-col md:flex-col lg:flex-col sm:justify-center sm:self-center">
        <div className="w-4/6 md:w-full sm:w-screen lg:w-full flex flex-col">
          <p className="text-xxxxxl sm:text-xxl font-semibold mt-12 mb-8 sm:mb-4 sm:mt-0 animate-fadeIn font-serif text-teal-300 cursor-none">
            I, Me & Myself
          </p>

          <div className="font-mono italic text-lg sm:text-sm text-indigo-200 animate-fadeIn pr-8">
            I’m a Blockchain Developer located in India. I have a serious
            passion for programming, especially for development on Web3 as well
            as Game Development. <br />
            <br />
            Result oriented, cheerful, positive person with leadership
            qualities. Always tending to learn and grow even more. Hitting the
            gym makes me who I am, more focused toward my goals. A family person
            and son of a beautiful couple. <br /> <br />
            Interested in the entire Web3 spectrum and working on ambitious
            projects with positive people. <br /> <br />
            Fueled by high energy levels and boundless enthusiasm, I'm easily
            inspired and more then willing to follow my fascinations wherever
            they take me. My abundant energy fuels me in the pursuit of many
            interests, hobbies, areas of study and artistic endeavors. I'm a
            fast learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </div>
          <div className="font-mono italic text-xl text-teal-400 mt-6 ml-5 animate-fadeIn underline">
            <Link href="/contact">Let's make something cool!</Link>
          </div>
        </div>
        <div
          className={` ${styles.imageZoomable} ${styles.shadowing} w-2/6 lg:w-1/3 md:w-1/3 sm:w-5/6 mt-14 sm:mb-10 self-center rounded cursor-none block md:hidden mr-8`}
        >
          <Image src={Me} />
          <p className="font-mono text-indigo-200 absolute">
            Kota <br />
            Rajasthan
            <br /> 26 Jan 2001
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
