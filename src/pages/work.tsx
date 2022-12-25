import type { NextPage } from 'next';
import styles from '@/styles/External.module.css';
import WorkCard from '@/ui/work-card';
import { database as db } from '@/firebase/firebase-config';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Head from 'next/head';

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
  const getWork = async () => {
    try {
      //Collection reference
      const collectionRef = collection(db, 'Projects');
      // Create a query against the collection.
      const q = query(collectionRef, where('visibility', '==', true));
      // Get the documents and process them
      const querySnapshot = await getDocs(q);
      const allWorks: any = [];
      querySnapshot.forEach((doc) => {
        // docData.push(doc.data());
        console.log(doc.id, ' => ', doc.data());
        allWorks.push([doc.id, doc.data()]);
      });
      // set docData;
      setWorks(allWorks);
    } catch (error) {
      console.log('Error getting document:', error);
    }
  };

  useEffect(() => {
    getWork();
  }, []);

  useEffect(() => {
    console.log('Works are set to :', works);
  }, [works]);

  return (
    <div className="w-full flex flex-wrap sm:justify-center">
      <Head>
        <title>AM | Blockchain Developer: Work</title>
      </Head>
      {works?.map((work) => (
        <WorkCard
          key={work[0]}
          previewImage={work[1].images[0]}
          shortDesc={work[1].briefDescription}
          linked={`work-details?id=${work[0]}`}
        />
      ))}
    </div>
  );
};

export default Work;
