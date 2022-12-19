import Link from 'next/link';
import styles from '@/styles/External.module.css';

const WorkCard = ({
  previewImage,
  shortDesc,
  linked,
}: {
  previewImage: any;
  shortDesc: string;
  linked: string;
}) => {
  return (
    <div
      className={`${styles.cardWithImage} flex flex-col m-10 bg-[#030129] text-indigo-200 sm:justify-center animate-fadeIn`}
    >
      <div className={styles.imageZoomable}>
        <img src={previewImage} width="300px" height="200px" />
      </div>
      <div className="p-2">
        <p>{shortDesc}</p>
      </div>
      <div className="font-mono italic text-lg text-teal-400 animate-fadeIn underline p-2">
        <Link href={linked}>View More</Link>
      </div>
    </div>
  );
};

export default WorkCard;
