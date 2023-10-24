import { FC } from "react";
import HorecaArtAtomPhoto from "../../../assets/images/HorecaArt/homeKitcher.png";

export const HorecaArtAtom: FC = () => {
  return (
    <div className="flex gap-6 flex-row flex-wrap lg:flex-nowrap justify-between items-center m-20 w-11/12 max-w-screen-2xl m-auto">
      <img src={HorecaArtAtomPhoto} alt="HorecaArtAtomPhoto" className="w-[800px] h-[400px]" />
      <div className="rounded-3xl border-3 border-[#EC9A1E] bg-[#EC9A1E] p-4 w-[800px] h-[400px] flex flex-col justify-center items-start">
        <div className="text-white text-left ml-20">
          <h2 className="text-2xl font-semibold mb-4">HorecaArt</h2>
          <p className="text-lg mb-4">
                        Одна из цифровых площадок, <br /> где страсть к готовке и кухонное <br /> профессиональное оборудование.
          </p>
          <button className="bg-white text-[#EC9A1E] border-r py-2 rounded-3xl px-4 transition duration-300 hover:bg-[#1965E1] hover:text-white">
                        Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};
