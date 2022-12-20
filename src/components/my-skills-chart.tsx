import UtilityButton from '@/ui/utilityButton';
import Link from 'next/link';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const MySkillsChart = () => {
  return (
    <div className="w-1/3 mt-10 pt-5 sm:pt-0 sm:flex sm:flex-col sm:w-9/12 sm:mt-0 sm:ml-10 overflow-hidden">
      <div>
        <motion.div className="flex flex-col w-4/5 font-mono non-italic font-bold ml-7 text-lg sm:text-sm text-indigo-200">
          {' '}
          WEB3
        </motion.div>
        <div className="mb-5 flex">
          <motion.div
            className="w-4/5 h-px bg-teal-400"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-1/5 h-px bg-[#282735]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
      <div>
        <motion.div className="flex flex-col w-4/5 font-mono non-italic font-bold ml-7 text-lg sm:text-sm text-indigo-200">
          {' '}
          REACT-JS
        </motion.div>
        <div className="mb-5 flex">
          <motion.div
            className="w-4/5 h-px bg-pink-600"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-1/5 h-px bg-[#282735]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
      <div>
        <motion.div className="flex flex-col w-4/5 font-mono non-italic font-bold ml-7 text-lg sm:text-sm text-indigo-200">
          {' '}
          UNITY & UNREAL
        </motion.div>
        <div className="mb-5 flex">
          <motion.div
            className="w-3/5 h-px bg-fuchsia-400"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-2/5 h-px bg-[#282735]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
      <div>
        <motion.div className="flex flex-col w-4/5 font-mono non-italic font-bold ml-7 text-lg sm:text-sm text-indigo-200">
          {' '}
          BACK-END
        </motion.div>
        <div className="mb-10 flex">
          <motion.div
            className="w-4/5 h-px bg-[#E8FF00]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-1/5 h-px bg-[#282735]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
      <div className="bg-slate-600 font-bold text-indigo-200 flex flex-col items-center p-2 rounded mb-7 animate-fadeIn">
        <p>Crypto Swaping Pool</p>
        <hr className="w-4/5 mt-2 mb-2" />
        <p className="flex ">
          Worked with Neolen group, and successfully created a crypto pool with
          the UI. For any crpto enthusiast to either stake in or swap their
          crypto with other compatible currencies.
        </p>
      </div>
      <div className="bg-slate-600 font-bold text-indigo-200 flex flex-col items-center p-2 rounded mb-14 animate-fadeIn">
        <p>Avtaram</p>
        <hr className="w-4/5 mt-2 mb-2" />
        <p className="">
          An open world 3PP game that revolve around the 6th avatar of the
          almighty Lord Vishnu. Covers the most epic and mind blowing combat
          scenes and the most exceptional life story of the lord{' '}
          <strong> Parshurama</strong>!
        </p>
      </div>
    </div>
  );
};

export default MySkillsChart;
