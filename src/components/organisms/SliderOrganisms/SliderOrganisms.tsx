import { FC } from "react";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../../../assets/data/slider";
import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

export const SliderOrganisms: FC = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage) => (
          <div key={slideImage.id}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
