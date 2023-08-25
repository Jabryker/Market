import React from "react";

const InformationLine = () => {
  return (
    <div className="w-fullWidth bg-[#373737] text-white py-20 flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-semibold">
        Хочешь доставку на дом?
      </h2>
      <p className="text-center text-2xl py-7" style={{ width: "45%" }}>
        Бесплатная доставка от 20 000 сом по г. Бишкек, менее этой суммы
        доставка от 1000 сом по г. Бишкек
      </p>
    </div>
  );
};

export default InformationLine;
