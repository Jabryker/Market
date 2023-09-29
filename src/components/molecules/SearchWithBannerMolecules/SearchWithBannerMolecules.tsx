import { FC } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import newBannerVideo from "../../../assets/video/newBannerVideo.mp4";
import { Button } from "../../atoms";

export const SearchWithBannerMolecules: FC = () => {
    return (
        <div className="relative h-screen w-[95%] flex items-center m-auto justify-center rounded-3xl">
            <video
                autoPlay
                loop
                muted
                src={newBannerVideo}
                className="w-full h-[70%] object-cover rounded-3xl"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 p-8 text-white ml-20 bg-opacity-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 overflow-hidden">
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
