import Skeleton from "react-loading-skeleton";

export const LoadingSkeleton = () => {
  return (
    <div>
      <Skeleton height={200} />
      <Skeleton count={2} />
    </div>
  );
};
