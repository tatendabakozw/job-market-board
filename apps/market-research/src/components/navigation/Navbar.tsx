import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { data } from '../../utils/data';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full border-b border-zinc-200/50">
      <div className="container w-full max-w-7xl mx-auto px-4 flex flex-row items-center space-x-4 py-4 ">
        <Link href={'/'} className="heading-text font-bold">
          Water Item
        </Link>
        <div className="md:flex hidden flex-row items-center space-x-4 text-sm font-semibold">
          {data.nav_options.map((item, index) => (
            <Link
              href={item.location}
              key={index}
              className={`${
                pathname === item.location
                  ? 'text-slate-900  font-bold'
                  : 'main-link-text '
              }  hover:font-semibold`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-1" />
        <Link
          href={'/settings'}
          className=" transition-all cursor-pointer duration-100 main-link-text  hover:bg-slate-100 p-1 rounded-full"
        >
          <Cog6ToothIcon height={20} width={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
