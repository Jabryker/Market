import { FC } from "react";
import ContentLoader from "react-content-loader";

export const CombinedData: FC = () => {
  return (
    <ContentLoader viewBox="0 0 500 420" height={450} width={500}>
      <rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
      <rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
      <rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
    </ContentLoader>
  );
};
