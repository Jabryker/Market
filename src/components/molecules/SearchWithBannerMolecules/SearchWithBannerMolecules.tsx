import { FC } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import newBannerVideo from "../../../assets/video/newBannerVideo.mp4";
import { Button } from "../../atoms";

export const SearchWithBannerMolecules: FC = () => {
    return (
        <div className="relative max-w-screen-2xl w-[95%] flex items-center m-auto justify-center rounded-3xl">
            <video
                autoPlay
                loop
                muted
                src={newBannerVideo}
                className="w-full h-[70%] object-cover rounded-3xl"
            />
            <div className="absolute top-1/2 flex flex-col justify-evenly h-full md:h-5/6 2xl:h-4/6 left-0 transform -translate-y-1/2 w-9/12 md:w-1/2 text-white ml-6 md:ml-10 bg-opacity-10 lg:ml-20">
                <h1 className="text-xl md:text-4xl lg:text-6xl font-medium md:font-bold mb-0 md:mb-6 overflow-hidden whitespace-nowrap">
                    Начните свой <br /> БИЗНЕС<br />с HorecaArt
                </h1>
                <p className="ms:text-base md:text-xl lg:text-2xl xl:text-3xl text-[#ec9a1e] mb-0 md:mb-6 lg:mb-8 whitespace-nowrap">
                    Все быстро и качественно <br /> от прямых поставщиков
                </p>
                <div className="w-9/12 md:w-4/5 2xl:w-3/5 mt-0 sm:mt-2 md:mt-6">
                    <Link to="/about-us">
                        <Button type="button">Стать Партнером</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
