import { FC } from "react";
import ContentLoader from "react-content-loader";

export const CardSkeleton: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={360}
      height={480}
      viewBox="0 0 360 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="100%" height="360" />
      <rect x="0" y="380" rx="0" ry="0" width="100%" height="20" />
      <rect x="0" y="410" rx="0" ry="0" width="70%" height="16" />
    </ContentLoader>
  );
};
