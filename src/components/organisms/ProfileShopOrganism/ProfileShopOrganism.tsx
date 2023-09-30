import React, { useEffect, useState } from "react";
import { IUser } from "../../../controllers/ProfileController";
import { imageListClasses } from "@mui/material";
import ShopProductMolecules from "../../molecules/ShopProductMolecules/ShopProductMolecules";

interface ProfileShopOrganismProps {
  userData: IUser;
}

const ProfileShopOrganism: React.FC<ProfileShopOrganismProps> = ({
  userData,
}) => {
  const [storeData, setStoreData] = useState<{
    id: number;
    name: string;
    description: string;
    logo: string;
    address: string;
  } | null>(null); // Замените тип на тот, который соответствует вашим данным

  useEffect(() => {
    if (userData && userData.store && userData.store.id) {
      const storeId = userData.store.id;
      const apiUrl = `http://127.0.0.1:8000/api/v1/stores/stores/${storeId}/`;

      // Извлекаем токен доступа из localStorage
      const accessToken = localStorage.getItem("access");

      // Проверяем, есть ли токен доступа
      if (accessToken) {
        // Отправляем GET-запрос с использованием токена доступа в заголовке
        fetch(apiUrl, {
          method: "GET", // Изменяем метод на GET
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
          .then((data) => {
            // Устанавливаем storeData в виде объекта с ключами и значениями
            setStoreData({
              id: data.id,
              name: data.name,
              description: data.description,
              logo: data.logo,
              address: data.address,
            });
          })
          .catch((error) => {
            console.error("Ошибка при отправке GET-запроса:", error);
          });
      }
    }
  }, [userData]);
  console.log(storeData);

  return (
    <div>
      {storeData ? (
        <h2
          style={{ color: "#47535F", fontSize: "24px", marginBottom: "10px" }}
        >
          Магазин: <b>{storeData.name}</b>
        </h2>
      ) : (
        "Загрузка..."
      )}
      {storeData ? (
        <h3
          style={{ color: "#47535F", fontSize: "20px", marginBottom: "30px" }}
        >
          Адрес: {storeData.address}
        </h3>
      ) : (
        "Загрузка..."
      )}
      {storeData ? <img src={storeData.logo} alt="" /> : "Загрузка..."}
      {storeData ? (
        <div>
          <h3
            style={{ color: "#47535F", fontSize: "24px", marginBottom: "10px" }}
          >
            Описание
          </h3>
          <p style={{ color: "#47535F", fontSize: "20px" }}>
            {storeData.description}
          </p>
        </div>
      ) : (
        "Загрузка..."
      )}
      {storeData ? <ShopProductMolecules storeId={storeData.id} /> : null}
      <button
        style={{
          width: "338px",
          height: "56px",
          background: "#47535F",
          borderRadius: "10px",
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "50px",
        }}
      >
        Добавить товар
      </button>
    </div>
  );
};

export default ProfileShopOrganism;
