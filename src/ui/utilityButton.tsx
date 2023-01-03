import type { NextComponentType } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/External.module.css';

const UtilityButton = ({
  name,
  linked,
  width,
}: {
  name: string;
  linked: string;
  width: string;
}) => {
  //console.log(linked);
  return (
    <Link href={linked}>
      <div
        className={`${styles.utilityButton} ${width} sm:w-4/5 sm:p-2 p-3 mt-9 border-2 border-indigo-800 flex justify-center text-indigo-200 text-xl sm:text-sm hover:font-bold cursor-pointer`}
      >
        {name}
      </div>
    </Link>
  );
};

export default UtilityButton;
