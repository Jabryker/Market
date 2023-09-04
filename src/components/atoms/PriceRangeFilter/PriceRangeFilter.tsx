import React, { FC } from "react";
import { Slider } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Correct import and usage

interface PriceRangeFilterProps {
    minPrice: number;
    maxPrice: number;
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({ minPrice, maxPrice }) => {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function
  const location = useLocation();

  const handleChange = (values: [number, number]) => {
    const [min, max] = values;
    const searchParams = new URLSearchParams(location.search);

    if (min !== minPrice || max !== maxPrice) {
      // Обновляем параметры запроса только если они изменились
      searchParams.set("price__gte", min.toString());
      searchParams.set("price__lte", max.toString());

      // Обновляем URL с новыми параметрами
      navigate({
        pathname: location.pathname,
        search: `?${searchParams.toString()}`,
      });
    }
  };

  return (
    <Slider
      range
      min={0}
      max={1000}
      step={10}
      defaultValue={[minPrice, maxPrice]}
      onChange={handleChange}
    />
  );
};
