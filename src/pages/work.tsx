import type { NextPage } from 'next';
import styles from '@/styles/External.module.css';
import WorkCard from '@/ui/work-card';
import { database as db } from '@/firebase/firebase-config';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type workDataType = [
  string,
  {
    Company: string;
    briefDescription: string;
    description: string;
    images: Array<string>;
    projectLink: string;
    visibility: boolean;
  }
];

const Work: NextPage = () => {
  const [works, setWorks] = useState<Array<workDataType>>();
  const [loading, setLoading] = useState(true);
  const getWork = async () => {
    try {
      setLoading(true);
      //Collection reference
      const collectionRef = collection(db, 'Projects');
      // Create a query against the collection.
      const q = query(collectionRef, where('visibility', '==', true));
      // Get the documents and process them
      const querySnapshot = await getDocs(q);
      const allWorks: any = [];
      querySnapshot.forEach((doc) => {
        // docData.push(doc.data());
        //console.log(doc.id, ' => ', doc.data());
        allWorks.push([doc.id, doc.data()]);
      });
      // set docData;
      setWorks(allWorks);
      setLoading(false);
    } catch (error) {
      //console.log('Error getting document:', error);
    }
  };

  useEffect(() => {
    getWork();
  }, []);

  useEffect(() => {
    //console.log('Works are set to :', works);
  }, [works]);

  return (
    <div className="w-full flex flex-wrap sm:justify-center">
      <Head>
        <title>AM | Blockchain Developer: Work</title>
      </Head>
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#fff">
        {loading ? (
          <Skeleton className="relative h-[23vw] overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark" />
        ) : null}
        {loading ? (
          <Skeleton className="relative h-[23vw] overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark" />
        ) : null}
        {works?.map((work) => (
          <WorkCard
            key={work[0]}
            previewImage={work[1].images[0]}
            shortDesc={work[1].briefDescription}
            linked={`work-details?id=${work[0]}`}
          />
        ))}
      </SkeletonTheme>
    </div>
  );
};

export default Work;
