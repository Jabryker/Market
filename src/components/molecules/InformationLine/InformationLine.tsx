import { FC } from "react";

const InformationLine: FC = () => {
  return (
    <div
      className="w-fullWidth bg-[#373737] text-white py-20 flex flex-col items-center justify-center rounded-tl-[50px] rounded-tr-[50px] shadow-md text-center"
    >
      <h2 className="text-4xl font-semibold overflow-hidden">
                Хочешь доставку на дом?
      </h2>
      <p className="text-2xl py-7 w-[45%]">
                Бесплатная доставка от 20 000 сом по г. Бишкек, менее этой суммы
                доставка от 1000 сом по г. Бишкек
      </p>
    </div>
  );
};

export default InformationLine;
