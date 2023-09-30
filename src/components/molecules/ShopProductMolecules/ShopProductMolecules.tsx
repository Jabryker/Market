import React, { useState, useEffect } from "react";

// Определите интерфейс для типа продукта
interface Product {
  id: number;
  name: string;
  brand: string;
  country_of_origin: string;
  description: string;
  price: number;
  quantity: number;
  images: [id: number, image: string];
  range_weight: number;
}

interface ShopProductMoleculesProps {
  storeId: number;
}

const ShopProductMolecules: React.FC<ShopProductMoleculesProps> = ({
  storeId,
}) => {
  const [storeProducts, setStoreProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/api/v1/stores/products/${storeId}/`;

    // Извлекаем токен доступа из localStorage
    const accessToken = localStorage.getItem("access");

    // Проверяем, есть ли токен доступа
    if (accessToken) {
      // Отправляем GET-запрос с использованием токена доступа в заголовке
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка сети");
          }
          return response.json();
        })
        .then((data: Product[]) => {
          setStoreProducts(data); // Исправлено здесь
        })
        .catch((error) => {
          console.error("Ошибка при отправке GET-запроса:", error);
        });
    }
  }, [storeId]);
  console.log(storeProducts);

  return (
    <div>
      {storeProducts && Array.isArray(storeProducts) ? (
        <div>
          {storeProducts.map((product: Product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Бренд: {product.brand}</p>
              <p>Страна производства: {product.country_of_origin}</p>
              <p>Описание: {product.description}</p>
              <p>Цена: {product.price}</p>
              <p>Количество: {product.quantity}</p>
              {/* Добавьте другие свойства по мере необходимости */}
            </div>
          ))}
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default ShopProductMolecules;
