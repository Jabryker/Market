import { Input } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import profile from "../../../assets/images/profile/ProfileFoto.jpg";

export const ProfileContent: FC = () => {
  const [profileData, setProfileData] = useState({
    photo: "",
    username: "",
    email: "",
    phone_number: "",
    address: "",
    job: "",
    specialization: "",
    birthday: "",
    telegram: "",
    whatsapp: "",
    INN: "",
    certificate_number: "",
  });

  const basicApi = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("access");
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : "";
  const userId = userInfo.id;
  const userRole = userInfo.role;

  const axiosInstance = axios.create({
    baseURL: basicApi,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const updateProfileData = async () => {
      try {
        let response;
        if (userRole === "S") {
          response = await axiosInstance.get(
            `/api/v1/accounts/sellers/${userId}/`
          );
        } else {
          response = await axiosInstance.get(
            `/api/v1/accounts/users/${userId}/`
          );
        }
        setProfileData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных профиля:", error);
      }
    };

    updateProfileData();
  }, [userId, userRole]);

  const handleSaveChanges = async () => {
    try {
      let response;
      if (userRole === "S") {
        response = await axiosInstance.patch(
          `/api/v1/accounts/sellers/${userId}/`,
          profileData
        );
      } else {
        response = await axiosInstance.patch(
          `/api/v1/accounts/users/${userId}/`,
          profileData
        );
      }
      console.log("Изменения сохранены", response.data);
    } catch (error) {
      console.error("Произошла ошибка при сохранении изменений:", error);
    }
  };
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="mb-4">
          <img
            src={profileData.photo || profile}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = profile;
            }}
            alt="Фото профиля"
            className="rounded-full w-24 h-24 mx-auto"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Photo URL:</label>
        <Input
          type="url"
          value={profileData.photo}
          onChange={(e) =>
            setProfileData({ ...profileData, photo: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Username:</label>
        <Input
          value={profileData.username}
          onChange={(e) =>
            setProfileData({ ...profileData, username: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <Input
          type="email"
          value={profileData.email}
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address:</label>
        <Input
          type="address"
          value={profileData.address}
          onChange={(e) =>
            setProfileData({ ...profileData, address: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Номер телефона:</label>
        <Input
          type="tel"
          value={profileData.phone_number}
          onChange={(e) =>
            setProfileData({ ...profileData, phone_number: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Job:</label>
        <Input
          type="job"
          value={profileData.job}
          onChange={(e) =>
            setProfileData({ ...profileData, job: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Specialization:</label>
        <Input
          type="tel"
          value={profileData.specialization}
          onChange={(e) =>
            setProfileData({ ...profileData, specialization: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Telegram:</label>
        <Input
          type="url"
          value={profileData.telegram}
          onChange={(e) =>
            setProfileData({ ...profileData, telegram: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Whatsapp:</label>
        <Input
          type="url"
          value={profileData.whatsapp}
          onChange={(e) =>
            setProfileData({ ...profileData, whatsapp: e.target.value })
          }
        />
      </div>
      {userInfo.role === "S" && (
        <>
          <div className="mb-4">
            <label className="block mb-2">ИНН:</label>
            <Input
              type="number"
              value={profileData.INN}
              onChange={(e) =>
                setProfileData({ ...profileData, INN: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Certificate number:</label>
            <Input
              type="number"
              value={profileData.certificate_number}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  certificate_number: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      <div>
        <button
          onClick={handleSaveChanges}
          className="bg-[#47535F] hover.bg-[#2B2F38] text-white font-bold py-2 px-4 rounded-xl transition-colors duration-300"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};
