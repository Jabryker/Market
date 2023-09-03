import { FC } from "react";
import { Carousel } from "antd";
import { slideImages } from "../../../assets/data/slider";

export const SliderOrganisms: FC = () => {
  return (
    <Carousel dotPosition="bottom">
      {slideImages.map((slideImage) => (
        <div key={slideImage.id}>
          <div
            style={{ backgroundImage: `url(${slideImage.url})` }}
            className="flex items-center justify-center bg-cover h-60 md:h-96 lg:h-[400px] xl:h-[500px]"
          ></div>
        </div>
      ))}
    </Carousel>
  );
};
