import React from 'react';

type Props = {
  _id: string;
  percentage: number;
  createdAt: number;
  name: string;
  description: string;
};

function ProductItem(item: Props) {
  return (
    <div className="flex flex-col space-y-3 border border-zinc-100 rounded-lg p-4">
      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-zinc-950">{item.name}</p>
        <p className="text-zinc-500 text-xs font-medium">{item.description}</p>
      </div>

      <div className="md:flex hidden col-span-1 font-medium text-sm items-center space-x-1">
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
      <div className="flex">
        <div className="bg-orange-200 rounded text-xs p-1 font-medium">
          {item.createdAt}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
