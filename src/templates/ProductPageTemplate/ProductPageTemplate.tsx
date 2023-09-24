import { FC, useEffect, useState } from "react";
import { DiscountProductsMolecules } from "../../components/molecules";
import { IProduct } from "../../controllers/interfaces/Product.interface";
import {
  NameFilterAtom,
  AddressFilterAtom,
  BrandFilterAtom,
  CountryFilterAtom,
  PriceRangeAtom,
} from "../../components/atoms/FilterItem/FilterItem";

export const ProductPageTemplate: FC = () => {
  const [nameFilter, setNameFilter] = useState<string>("");
  const [addressFilter, setAddressFilter] = useState<string | number>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [countryFilter, setCountryFilter] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const fetchFilteredProducts = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/stores/products/?search=${encodeURIComponent(
          nameFilter,
        )}&category=&address=${encodeURIComponent(
          addressFilter,
        )}&country=${encodeURIComponent(
          countryFilter,
        )}&brand=${encodeURIComponent(
          brandFilter,
        )}&fuel=&price__gte=${encodeURIComponent(
          priceRange[0],
        )}&price__lte=${encodeURIComponent(priceRange[1])}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      // Update this code to match your expected data structure
      const filteredProducts = data.results;
      setFilteredProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    // fetchFilteredProducts();
  }, [nameFilter, addressFilter, brandFilter, countryFilter, priceRange]);

  const handleFilterButtonClick = () => {
    // Trigger data fetching when the button is clicked
    fetchFilteredProducts();
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r border-gray-300">
        <NameFilterAtom value={nameFilter} onChange={setNameFilter} />
        <AddressFilterAtom value={addressFilter} onChange={setAddressFilter} />
        <BrandFilterAtom value={brandFilter} onChange={setBrandFilter} />
        <CountryFilterAtom value={countryFilter} onChange={setCountryFilter} />
        <PriceRangeAtom value={priceRange} onChange={setPriceRange} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleFilterButtonClick}
        >
                    Применить фильтры
        </button>
      </div>
      <div className="w-3/4 p-4">
        <DiscountProductsMolecules products={filteredProducts} />
      </div>
    </div>
  );
};
