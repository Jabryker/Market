import { FC, useState, useEffect } from "react";
import profile from "../../../assets/images/profile/ProfileFoto.jpg";

export const ProfileContent: FC = () => {
    const [profileData, setProfileData] = useState({
        photo: "",
        nickname: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        inn: "",
    });

    useEffect(() => {
        // Здесь вы можете выполнить запрос к бэкенду, чтобы получить данные профиля
        // и установить их в состояние `profileData`
        // Пример запроса:
        // fetch("/api/profile")
        //   .then((response) => response.json())
        //   .then((data) => setProfileData(data));
        // Этот код предполагает, что вы получите данные в формате JSON и установите их в `profileData`
        // Замените его на реальный запрос к вашему бэкенду.
    }, []);

    const handleSaveChanges = () => {
        // Здесь вы можете отправить измененные данные на бэкенд
        // Пример отправки данных:
        // fetch("/api/profile", {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(profileData),
        // })
        //   .then((response) => {
        //     if (response.ok) {
        //       // Обработка успешной отправки
        //       console.log("Изменения сохранены");
        //     } else {
        //       // Обработка ошибки при сохранении изменений
        //       console.error("Произошла ошибка при сохранении изменений");
        //     }
        //   });
        // Этот код предполагает, что вы отправите измененные данные на бэкенд в формате JSON
        // Замените его на реальный код для сохранения изменений.
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <div className="mb-4">
                    <img
                        src={
                            profile
                            ||
                            profileData?.photo
                        }
                        onError={(e)=> {
                            const img = e.target as HTMLImageElement;
                            img.src = profile;
                        }}
                        alt="Фото профиля"
                        className="rounded-full w-24 h-24 mx-auto"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Nickname:</label>
                <input
                    type="text"
                    value={profileData.nickname}
                    onChange={(e) =>
                        setProfileData({ ...profileData, nickname: e.target.value })
                    }
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Имя и фамилия:</label>
                <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) =>
                        setProfileData({ ...profileData, fullName: e.target.value })
                    }
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                        setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Номер телефона:</label>
                <input
                    type="tel"
                    value={profileData.phoneNumber}
                    onChange={(e) =>
                        setProfileData({ ...profileData, phoneNumber: e.target.value })
                    }
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">ИНН:</label>
                <input
                    type="text"
                    value={profileData.inn}
                    onChange={(e) =>
                        setProfileData({ ...profileData, inn: e.target.value })
                    }
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <button
                    onClick={handleSaveChanges}
                    className="bg-[#47535F] hover:bg-[#2B2F38] text-white font-bold py-2 px-4 rounded-xl transition-colors duration-300"
                >
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
};