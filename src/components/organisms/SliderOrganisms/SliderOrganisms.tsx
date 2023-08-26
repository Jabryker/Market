import { FC } from "react";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../../../assets/data/slider";
import "react-slideshow-image/dist/styles.css";

export const SliderOrganisms: FC = () => {
  return (
    <div className="slide-container w-full">
      <Slide
        indicators={true} // Убрать индикаторы слайдов
        pauseOnHover={false} // Отключить паузу при наведении
      >
        {slideImages.map((slideImage) => (
          <div key={slideImage.id}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="flex items-center justify-center bg-cover h-60 md:h-96 lg:h-[400px] xl:h-[500px]"
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
