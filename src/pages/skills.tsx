import type { NextPage } from 'next';
import MySkills from '@/components/my-skills';
import MySkillsChart from '@/components/my-skills-chart';
import Head from 'next/head';

const Skills: NextPage = () => {
  return (
    <div className="flex justify-evenly sm:flex-col sm:ml-0">
      <Head>
        <title>AM | Blockchain Developer: My Skills</title>
      </Head>
      <MySkills />
      <MySkillsChart />
    </div>
  );
};

export default Skills;
