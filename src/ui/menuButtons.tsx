import type { NextComponentType } from 'next';
import Link from 'next/link';

const MenuButton = ({ name, linked }: { name: string; linked: string }) => {
  console.log(linked);
  return (
    <div className=" w-4/5 text-indigo-200 text-lg hover:text-cyan-300 focus:text-cyan-300 hover:font-bold">
      <Link href={linked}>{name}</Link>
      <br />
    </div>
  );
};

export default MenuButton;
