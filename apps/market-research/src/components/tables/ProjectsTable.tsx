import { useRouter } from 'next/router';
import React from 'react';
import { data } from '../../utils/data';
import { ProjectItemProps } from '../../utils/types';

const ProjectsTable = () => {
  const router = useRouter();
  return (
    <div className="flex max-w-7xl w-full mx-auto flex-col">
      <div className="grid md:grid-cols-5 grid-cols-4 bg-secondary w-full heading-text rounded capitalize">
        <div className="col-span-1 p-2 font-medium text-sm">name</div>
        <div className=" col-span-1 p-2 font-medium text-sm">description</div>
        <div className="col-span-1 p-2 font-medium text-sm">status</div>

        <div className="md:flex hidden col-span-1 p-2 font-medium text-sm">
          Progress
        </div>

        <div className="col-span-1 p-2 font-medium text-sm">Action</div>
      </div>
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
    </div>
  );
};

export default ProjectsTable;
