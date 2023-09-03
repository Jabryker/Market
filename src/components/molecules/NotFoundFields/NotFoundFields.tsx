import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/";

export const NotFoundFields: FC = () => {
  const isSmallScreen = window.innerWidth < 600;

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${
        isSmallScreen ? "bg-white" : "bg-gray-100"
      }`}
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-3 md:mb-4 lg:mb-8">
        404 Not Found
      </h1>
      <span className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-16">
        Your visited page not found. You may go to the home page.
      </span>

      <Link to="/">
        <Button type="submit">Вернуться на главную</Button>
      </Link>
    </div>
  );
};
