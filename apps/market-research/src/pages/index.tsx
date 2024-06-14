import {
  BanknotesIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/16/solid';
import { useState } from 'react';
import GeneralLayout from '../layouts/GeneralLayout';
import ProjectsTable from '../components/tables/ProjectsTable';
import { useRouter } from 'next/router';

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
      createdAt: '3',
      branch: 'available',
      status: 'success',
      Icon: ClipboardDocumentIcon,
    },
    {
      name: 'Monitoring',
      _id: 'total-sales',
      link: 'https://daypitch.com',
      createdAt: '3',
      branch: 'available',
      status: 'success',
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
        <ProjectsTable />
      </div>
    </GeneralLayout>
  );
}

export default Index;
