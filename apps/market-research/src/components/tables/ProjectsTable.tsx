import { useRouter } from 'next/router';
import React from 'react';
import { data } from '../../utils/data';
import { useFetch } from '../../hooks/useFetch';
import { apiUrl } from '../../utils/apiUrl';

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

          <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
            {item.percentage}
          </div>

          <div className="col-span-1 p-2 font-medium text-sm"></div>
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
                {item.percentage}
              </div>

              <div className="col-span-1 p-2 font-medium text-sm"></div>
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
