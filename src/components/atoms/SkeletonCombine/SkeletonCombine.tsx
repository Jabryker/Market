import { FC } from "react";
import { CombinedData } from "../";

interface ISkeletonCombineProps {
  quantity: number;
}

export const SkeletonCombine: FC<ISkeletonCombineProps> = ({ quantity }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: quantity }).map((_, index) => (
        <div key={index} className="m-4">
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="relative pb-2/3">
              <CombinedData />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
