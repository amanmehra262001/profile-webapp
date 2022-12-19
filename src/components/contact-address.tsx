import UtilityButton from '@/ui/utilityButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styles from '@/styles/External.module.css';

const ContactAddress = () => {
  return (
    <div className="text-xl flex flex-col sm:items-center sm:ml-0">
      <p className="text-teal-500 text-2xl font-mono font-bold mt-14 sm:mt-0 mb-14 animate-fadeIn">
        LOCATION
      </p>
      <p className="text-indigo-100 font-mono animate-fadeIn">
        E-541 R.K. PURAM KOTA
      </p>
      <p className="text-indigo-100 font-mono animate-fadeIn">
        RAJASTHAN, INDIA
      </p>
      <p className="text-indigo-100 font-mono animate-fadeIn">
        PIN-CODE: 324010
      </p>
      <p className="text-teal-500 text-2xl font-mono font-bold mt-14 animate-fadeIn">
        FOLLOWME
      </p>
      <div className="mt-14 w-1/2 sm:w-3/5 text-indigo-200 flex justify-between animate-fadeIn">
        <FontAwesomeIcon
          className="hover:text-cyan-300"
          icon={faGithub}
          size="2x"
        />
        <FontAwesomeIcon
          className="hover:text-cyan-300"
          icon={faLinkedin}
          size="2x"
        />
        <FontAwesomeIcon
          className="hover:text-cyan-300"
          icon={faEnvelope}
          size="2x"
        />
      </div>
    </div>
  );
};

export default ContactAddress;
