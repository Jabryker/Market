import { FC } from "react";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../../../assets/data/slider";
import "react-slideshow-image/dist/styles.css";

export const SliderOrganisms: FC = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage) => (
          <div key={slideImage.id}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="flex items-center justify-center bg-cover h-[200px] md:h-[400px]"
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
