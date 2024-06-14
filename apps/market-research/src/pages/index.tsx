import {
  BanknotesIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/16/solid';
import { useState } from 'react';
import GeneralLayout from '../layouts/GeneralLayout';
import ProjectsTable from '../components/tables/ProjectsTable';
import { useRouter } from 'next/router';
import ProjectTile from '../components/project-tile/ProjectTile';
import Clock from '../components/clock/Clock';
import Calendar from '../components/calender/Calender';

export function Index() {
  const router = useRouter();
  const [selected_option, setSelectedOption] = useState({
    name: 'Active',
    _id: 'active',
  });

  const tap_options = [
    { name: 'Active', _id: 'active' },
    { name: 'Suspended', _id: 'suspended' },
    { name: 'All', _id: 'all' },
  ];

  const projects = [
    {
      name: 'Pumps',
      _id: 'inventory-items',
      link: 'https://example.digiforge.app',
      createdAt: 12123,
      status: 'in-progress',
      Icon: ClipboardDocumentIcon,
    },
    {
      name: 'Monitoring',
      _id: 'total-sales',
      link: 'https://daypitch.com',
      createdAt: 12123,
      status: 'pending',
      Icon: BanknotesIcon,
    },
  ];
  return (
    <GeneralLayout>
      <div className="bg-white min-h-[96vh] p-4 max-w-7xl w-full mx-auto space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-2">
            <p className="text-zinc-950 text-5xl font-semibold">
              General Overview
            </p>
            <p className="text-sm font-medium text-zinc-500">
              Check a list of your ongong projects
            </p>
          </div>
          <div className="flex">
            <button
              onClick={() => router.push('/project/add-project')}
              className="bg-zinc-950 hover:bg-zinc-800 text-white font-semibold p-2 rounded-lg"
            >
              Add Project
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 w-full">
          <div className="flex flex-row items-center flex-1 bg-white border border-zinc-200/50 text-sm rounded-lg px-2 space-x-4">
            <MagnifyingGlassIcon
              height={20}
              width={20}
              className="text-zinc-400"
            />
            <input
              type="text"
              className="outline-none flex-1 py-2 text-zinc-700"
              placeholder="search anything"
            />
          </div>
          <div className="md:flex hidden flex-row items-center text-sm  bg-white rounded-lg divide-x-[1px] divide-zinc-200 border border-zinc-200/50 ">
            {tap_options.map((item) => (
              <button
                onClick={() => setSelectedOption(item)}
                key={item._id}
                className={`${
                  item._id === selected_option._id
                    ? 'text-zinc-950 '
                    : 'text-zinc-700 '
                } px-4 py-2`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {/* project tiles */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="md:col-span-2 col-span-1 flex flex-col space-y-4 ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {projects.map((item) => (
                <ProjectTile
                  Icon={item.Icon}
                  link={item.link}
                  _id={item._id}
                  key={item._id}
                  name={item.name}
                  createdAt={item.createdAt}
                  status={'in-progress'}
                />
              ))}
              <Clock />
            </div>
            {/* <NetworkTable /> */}
            <ProjectsTable />
            {/* <TanksPageTable /> */}
          </div>
          <div className="col-span-1">
            <Calendar />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Index;
