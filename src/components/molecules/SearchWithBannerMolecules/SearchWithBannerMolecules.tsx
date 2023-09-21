import { FC } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import bannerVideo from "../../../assets/video/banner.mp4";
import { Button } from "../../atoms";

export const SearchWithBannerMolecules: FC = () => {
  return (
    <div className="relative w-4/5 mx-auto h-80 md:h-96 lg:h-[400px] xl:h-[500px]">
      <video
        autoPlay
        loop
        muted
        src={bannerVideo}
        className="w-full h-full object-cover"
      />
      {/* backdrop-blur-lg */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 p-8 text-white ml-20 bg-opacity-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Начните свой <br /> БИЗНЕС<br />с HorecaArt
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[#ec9a1e] mb-8">
          Все быстро и качественно <br /> от прямых поставщиков
        </p>
        <div className="w-[300px]">
        <Link to="/about-us">
          <Button type="button">Стать Партнером</Button>
        </Link>
        </div>
      </div>
    </div>
  );
};
