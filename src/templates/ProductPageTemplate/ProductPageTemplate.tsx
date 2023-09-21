import { FC, useEffect, useState } from "react"
import {
  AddressFilter,
  CategoryFilter,
  NameFilter,
  PriceRangeFilter,
} from "../../components/atoms"
import { DiscountProductsMolecules } from "../../components/molecules"
import ProductController from "../../controllers/ProductController"
import { IProduct } from "../../controllers/interfaces/Product.interface"

export const ProductPageTemplate: FC = () => {
  const [allProduct, setAllProduct] = useState<IProduct[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [nameFilter, setNameFilter] = useState<string>("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [selectedAddress, setSelectedAddress] = useState<string>("")
  const [selectedSort, setSelectedSort] = useState<string>("")

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const fetchedProducts: IProduct[] =
					await ProductController.getFilteredProducts({
					  category: selectedCategory,
					  name: nameFilter,
					  minPrice: priceRange[0],
					  maxPrice: priceRange[1],
					  address: selectedAddress,
					})

        const sortedProducts = sortProducts(fetchedProducts, selectedSort)
        setAllProduct(sortedProducts)
      }

      fetchProducts()
    } catch (e) {
      console.log(e)
    }
  }, [selectedCategory, nameFilter, priceRange, selectedAddress, selectedSort])

  const sortProducts = (products: IProduct[], sortBy: string) => {
    switch (sortBy) {
    case "priceLowToHigh":
      return products.slice().sort((a, b) => a.price - b.price)
    case "priceHighToLow":
      return products.slice().sort((a, b) => b.price - a.price)
    default:
      return products
    }
  }

  return (
    <div className="flex h-screen">
      {/* Левая колонка с фильтрами */}
      <div className="w-1/4 p-4 border-r h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Фильтры</h2>

        {/* Фильтр по категории */}
        <h3 className="text-sm font-medium mb-2">Категория</h3>
        <CategoryFilter
          categories={["Категория 1", "Категория 2", "Категория 3"]}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        {/* Фильтр по названию */}
        <h3 className="text-sm font-medium mb-2">Название</h3>
        <NameFilter value={nameFilter} onChange={setNameFilter} />

        {/* Фильтр по цене */}
        <h3 className="text-sm font-medium mb-2">Цена</h3>
        <PriceRangeFilter
          minPrice={0}
          maxPrice={1000}
          onChange={values => setPriceRange(values)} // Передайте функцию обратного вызова для обновления priceRange
        />

        {/* Фильтр по адресу */}
        <h3 className="text-sm font-medium mb-2">Адрес</h3>
        <AddressFilter value={selectedAddress} onChange={setSelectedAddress} />
      </div>

      {/* Правая колонка с продуктами */}
      <div className="w-3/4 p-4 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Товары</h2>
        <DiscountProductsMolecules products={allProduct} />
      </div>
    </div>
  )
}
