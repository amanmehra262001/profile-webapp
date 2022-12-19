import type { NextPage } from 'next';
import styles from '@/styles/External.module.css';
import WorkCard from '@/ui/work-card';
import { workData } from '@/constants';

const Work: NextPage = () => {
  return (
    <div className="w-full flex flex-wrap sm:justify-center">
      {workData.map((work) => (
        <WorkCard
          previewImage={work.images[0]}
          shortDesc={work.shortDesc}
          linked={`${work.linked}?id=${work.id}`}
        />
      ))}
    </div>
  );
};

export default Work;
