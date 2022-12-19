import type { NextPage } from 'next';
import MySkills from '@/components/my-skills';
import MySkillsChart from '@/components/my-skills-chart';

const Skills: NextPage = () => {
  return (
    <div className="flex justify-evenly sm:flex-col sm:ml-0">
      <MySkills />
      {/* <div className="sm:mt-12 sm:mb-12 flex justify-center items-center"> */}
      <MySkillsChart />
      {/* </div> */}
    </div>
  );
};

export default Skills;
