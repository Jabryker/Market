import { FC } from "react";
import ContentLoader from "react-content-loader";

export const CombinedData: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="7" y="0" rx="2" ry="2" width="386" height="400" />
      <rect x="7" y="416" rx="0" ry="0" width="386" height="24" />
      <rect x="318" y="436" rx="0" ry="0" width="70" height="16" />
    </ContentLoader>
  );
};
