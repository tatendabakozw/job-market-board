import { useRouter } from 'next/router';
import React from 'react';
import { data } from '../../utils/data';
import { useFetch } from '../../hooks/useFetch';
import { apiUrl } from '../../utils/apiUrl';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ProjectsTable = () => {
  const app_projects = useFetch(`${apiUrl}`);

  const router = useRouter();
  return (
    <div className="flex max-w-7xl w-full mx-auto flex-col my-8">
      <div className="grid md:grid-cols-5 grid-cols-4 bg-zinc-100 w-full heading-text rounded capitalize">
        <div className="col-span-1 p-2 font-medium text-sm">name</div>
        <div className=" col-span-1 p-2 font-medium text-sm">description</div>
        <div className="col-span-1 p-2 font-medium text-sm">status</div>

        <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
          Progress
        </div>

        <div className="col-span-1 p-2 font-medium text-sm">Action</div>
      </div>
      <p className="text-zinc-900 text-lg font-semibold py-4">
        Example Projects
      </p>
      {data.bodies_info.map((item) => (
        <div
          key={item._id}
          onClick={() => router.push(`/tanks/${item._id}`)}
          className="grid md:grid-cols-5 grid-cols-4 cursor-pointer bg-primary w-full main-text capitalize"
        >
          <div className="col-span-1 p-2 font-medium text-sm">{item.name}</div>
          <div className="col-span-1 p-2 font-medium text-sm">
            {item.description}
          </div>
          <div className="col-span-1 p-2 font-medium text-sm">
            {item.status}
          </div>

          <div className="md:flex hidden col-span-1 p-2 font-medium text-sm items-center space-x-1">
            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                className={`${
                  item.percentage < 20
                    ? 'bg-red-500 '
                    : item.percentage > 70
                    ? 'bg-green-600 '
                    : 'bg-blue-700 '
                } bg-blue-600 h-2.5 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs font-semiibold">{item.percentage}</p>
          </div>

          <div className="col-span-1 p-2 font-medium text-sm ml-auto">
            <div className="flex bg-zinc-100 p-1 rounded-full hover:bg-zinc-200 cursor-pointer">
              <ArrowRightIcon height={16} width={16} />
            </div>
          </div>
        </div>
      ))}
      <p className="text-zinc-900 text-lg font-semibold py-4">Your Projects</p>
      {app_projects?.data?.length > 1 ? (
        <>
          {data.bodies_info.map((item) => (
            <div
              key={item._id}
              onClick={() => router.push(`/tanks/${item._id}`)}
              className="grid md:grid-cols-5 grid-cols-4 cursor-pointer bg-primary w-full main-text capitalize"
            >
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.name}
              </div>
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.description}
              </div>
              <div className="col-span-1 p-2 font-medium text-sm">
                {item.status}
              </div>

              <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className={`${
                      item.percentage < 20
                        ? 'bg-red-500 '
                        : item.percentage > 70
                        ? 'bg-green-600 '
                        : 'bg-blue-700 '
                    } bg-blue-600 h-2.5 rounded-full`}
                    style={{ width: `45%` }}
                  ></div>
                </div>
                {item.percentage}
              </div>

              <div className="flex bg-zinc-100 p-1 rounded-full hover:bg-zinc-200 cursor-pointer">
                <ArrowRightIcon height={16} width={16} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center bg-zinc-100 rounded-lg p-2">
          No Projects yet
        </p>
      )}
    </div>
  );
};

export default ProjectsTable;
