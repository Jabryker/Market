import React, { FC, useEffect, useState } from "react";
import { DiscountProductsMolecules } from "../../components/molecules";
import ProductController from "../../controllers/ProductController";
import { IProduct } from "../../controllers/interfaces/Product.interface";
import { CategoryFilter, NameFilter, PriceRangeFilter, AddressFilter } from "../../components/atoms";

export const ProductPageTemplate: FC = () => {
  const [allProduct, setAllProduct] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedAddress, setSelectedAddress] = useState<string>("");

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        // Передача параметров фильтров в запрос
        const fetchedProducts: IProduct[] = await ProductController.getFilteredProducts({
          category: selectedCategory,
          name: nameFilter,
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
          address: selectedAddress,
        });
        setAllProduct(fetchedProducts);
      };

      fetchProducts();
    } catch (e) {
      console.log(e);
    }
  }, [selectedCategory, nameFilter, priceRange, selectedAddress]);

  return (
    <div>
      <h2>Product Page</h2>

      <CategoryFilter
        categories={["Категория 1", "Категория 2", "Категория 3"]}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <NameFilter
        value={nameFilter}
        onChange={setNameFilter}
      />

      <PriceRangeFilter
        minPrice={0}
        maxPrice={1000}
        onChange={setPriceRange}
      />

      <AddressFilter
        value={selectedAddress}
        onChange={setSelectedAddress}
      />

      <DiscountProductsMolecules products={allProduct} />
    </div>
  );
};
