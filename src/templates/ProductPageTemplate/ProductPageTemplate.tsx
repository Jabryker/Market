import { FC, useEffect, useState } from "react";
import {
  AddressFilterAtom,
  BrandFilterAtom,
  CountryFilterAtom,
  NameFilterAtom,
  PriceRangeAtom,
} from "../../components/atoms/FilterItem/FilterItem";
import { DiscountProductsMolecules } from "../../components/molecules";
import { IProduct } from "../../controllers/interfaces/Product.interface";

export const ProductPageTemplate: FC = () => {
  const [nameFilter, setNameFilter] = useState<string>("");
  const [addressFilter, setAddressFilter] = useState<string | number>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [countryFilter, setCountryFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>(""); // New filter
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const fetchFilteredProducts = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/stores/products/?search=${encodeURIComponent(
          nameFilter,
        )}&category=${encodeURIComponent( // Include the category filter in the URL
          categoryFilter,
        )}&address=${encodeURIComponent(
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
    fetchFilteredProducts();
  }, [nameFilter, addressFilter, brandFilter, countryFilter, categoryFilter, priceRange]);

  const handleFilterButtonClick = () => {
    // Trigger data fetching when the button is clicked
    fetchFilteredProducts();
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r border-gray-300 rounded-lg">
        <div className="bg-gray-200 h-[80vh] p-6">
          <h2 className="font-bold text-2xl mb-4">Фильтры</h2>
          <div className="space-y-4">
            <NameFilterAtom value={nameFilter} onChange={setNameFilter} />
            <AddressFilterAtom value={addressFilter} onChange={setAddressFilter} />
            <BrandFilterAtom value={brandFilter} onChange={setBrandFilter} />
            <CountryFilterAtom value={countryFilter} onChange={setCountryFilter} />
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Категория</label>
              <select
                className="block w-full px-4 py-2 mt-1 border rounded-lg bg-white border-gray-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Выберите категорию</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
                <option value="category3">Категория 3</option>
              </select>
            </div>
            <PriceRangeAtom value={priceRange} onChange={setPriceRange} />
          </div>
          <button
            className="bg-[#EC9A1E] hover:bg-[#c78e38] text-white font-bold py-3 px-6 rounded-full mt-8 w-full"
            onClick={handleFilterButtonClick}
          >
            Применить фильтры
          </button>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <DiscountProductsMolecules products={filteredProducts} />
      </div>
    </div>
  );
};
