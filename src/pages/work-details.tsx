import type { NextPage } from 'next';
import Slideshow from '@/components/slideShow';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { database as db } from '@/firebase/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';

type workType = {
  Company: string;
  briefDescription: string;
  description: string;
  images: Array<string>;
  projectLink: string;
  visibility: boolean;
  keyImplemetations: Array<string>;
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
    } else {
      router.push('/work');
    }
  }, [query.id]);
  return (
    work && (
      <div className="w-full flex flex-col justify-center rounded-lg overflow-hidden mb-9">
        <Head>
          <title>AM | Blockchain Developer: Work Details</title>
        </Head>
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
          <br />
          <br />
          <div className="text-left flex flex-col">
            <p className="font-bold text-xl">Key Implementations:</p>
            {work.keyImplementations.map((implementation: string) => (
              <p>⭐ {implementation}</p>
            ))}
          </div>
          <div className="font-mono italic text-teal-400 mt-6 ml-5 animate-fadeIn underline">
            <a target="_blank" href={work.projectLink}>
              Visit the live project!
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default WorkDetails;
