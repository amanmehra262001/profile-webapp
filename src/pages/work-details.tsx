import type { NextPage } from 'next';
import styles from '@/styles/External.module.css';
import Link from 'next/link';
import Slideshow from '@/components/slideShow';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { workData } from '@/constants';
import { database as db } from '@/firebase/firebase-config';
import { collection, doc, getDoc } from 'firebase/firestore';

type workType = {
  Company: string;
  briefDescription: string;
  description: string;
  images: Array<string>;
  projectLink: string;
  visibility: boolean;
};

const WorkDetails: NextPage = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [work, setWork] = useState<workType | any>();
  const retrieveDoc = async () => {
    const docId: string | any = query.id;
    const docRef = doc(db, 'Projects', docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setWork(docSnap.data());
    } else {
      console.log('No such document');
    }
  };
  useEffect(() => {
    if (query.id) {
      retrieveDoc();
      console.log(work);
      // workData.map((workConst: any) => {
      //   if (workConst.id == query.id) {
      //     setWork(workConst);
      //   }
      // });
    } else {
      router.push('/work');
    }
  }, [query.id]);
  return (
    work && (
      <div className="w-full flex flex-col justify-center rounded-lg overflow-hidden mb-9">
        <div className="w-11/12 self-center mt-5 rounded-lg overflow-hidden">
          <Slideshow images={work.images} />
        </div>

        <div className="self-center">
          <p className="text-xxxxl sm:text-xxl font-semibold mt-4 mb-8 sm:mb-4 sm:mt-0 animate-fadeIn font-serif text-teal-300 cursor-none">
            {work.Company}
          </p>
        </div>
        <div className="w-11/12 sm:w-full ml-12 self-center text-center font-mono italic text-lg sm:text-sm text-indigo-200 animate-fadeIn pr-14">
          {work.description}
          <div className="font-mono italic text-xl text-teal-400 mt-6 ml-5 animate-fadeIn underline">
            <a href={work.projectLink}>See project!</a>
          </div>
        </div>
      </div>
    )
  );
};

export default WorkDetails;
