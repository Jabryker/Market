import { FC } from "react";
import { CardSkeleton } from "../";

interface SkeletonCardProps {
  quantity: number;
}

export const SkeletonCard: FC<SkeletonCardProps> = ({ quantity }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: quantity }).map((_, index) => (
        <div key={index} className="m-4">
          <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="relative pb-2/3">
              <CardSkeleton />
            </div>
            <h3 className="text-lg font-semibold mt-4">
              <CardSkeleton />
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
