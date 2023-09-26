// import { FC } from "react";
// import { Descriptions } from "antd";
// import { IUserProfile, IUser } from "../../controllers/ProfileController";
//
// interface ProfileTemplateProps {
//     userData: IUserProfile | IUser;
// }
//
// export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-10 text-center">Welcome to profile {userData.username}!</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="col-span-1">
//           <img
//             src={userData.photo}
//             alt={`${userData.email}`}
//             className="max-w-full h-auto mb-4 md:mb-0 md:max-h-100"
//           />
//         </div>
//         <div className="col-span-1">
//           <Descriptions bordered column={1}>
//             <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
//             <Descriptions.Item label="Username">{userData.username}</Descriptions.Item>
//             <Descriptions.Item label="Phone Number">{userData.phone_number}</Descriptions.Item>
//             <Descriptions.Item label="Birthday">{userData.birthday}</Descriptions.Item>
//             <Descriptions.Item label="Job">{userData.job}</Descriptions.Item>
//             <Descriptions.Item label="Specialization">{userData.specialization}</Descriptions.Item>
//             <Descriptions.Item label="WhatsApp">{userData.whatsapp}</Descriptions.Item>
//             <Descriptions.Item label="Telegram">{userData.telegram}</Descriptions.Item>
//             <Descriptions.Item label="Address">{userData.address}</Descriptions.Item>
//           </Descriptions>
//         </div>
//       </div>
//     </div>
//   );
// };
import { FC, useState } from "react";
import { Descriptions, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { IUserProfile, IUser } from "../../controllers/ProfileController";
import userPng from "../../assets/images/profile/user.png";
import back from "../../assets/images/profile/border_all.png";
import heart from "../../assets/images/profile/heart small.png";
import mallBack from "../../assets/images/profile/icon-mallbag.png";
import out from "../../assets/images/profile/Icon-logout.png";
import { height } from "@mui/system";

const { Option } = Select;

interface ProfileTemplateProps {
  userData: IUserProfile | IUser;
}

export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
  const [activeLi, setActiveLi] = useState<string | null>(null);

  const handleLiClick = (liName: string) => {
    setActiveLi(liName);
  };
  // Состояния для редактируемых полей
  const [editedEmail, setEditedEmail] = useState(userData.email);
  const [editedPhone, setEditedPhone] = useState(userData.phone_number);
  const [editedBirthday, setEditedBirthday] = useState<dayjs.Dayjs | null>(
    dayjs(userData.birthday)
  );
  const [editedJob, setEditedJob] = useState(userData.job);
  const [editedSpecialization, setEditedSpecialization] = useState(
    userData.specialization
  );

  // Функция для сохранения изменений
  const handleSaveChanges = () => {
    // Вызовов функции ProfileController.updateProfile
  };

  return (
    <div>
      <div
        // className="grid grid-cols-1 md:grid-cols-2 gap-1"
        style={{ padding: "20px", display: "flex" }}
      >
        <div
          className="col-span-1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            padding: "10px",
            width: "40%",
            borderRight: "1px solid #979797",
          }}
        >
          {userData.photo ? (
            <img
              src={userData.photo}
              alt={`${userData.email}`}
              className="max-w-full h-auto mb-4 md:mb-0 md:max-h-100"
            />
          ) : (
            <div
              className="col-span-1"
              style={{
                width: "135px",
                height: "135px",
                borderRadius: "50%",
                background: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Добавьте фото
            </div>
          )}
          <h3 style={{ color: "#253138", fontSize: "18px" }}>
            {userData.username}
          </h3>
          <h4 style={{ color: "#253138", fontSize: "14px" }}>
            {userData.email}
          </h4>
          <div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <li
                style={{
                  width: "70%",
                  height: "64px",
                  color: activeLi === "profile" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor:
                    activeLi === "profile" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("profile")}
              >
                <img
                  src={userPng}
                  style={{ width: "25px", height: "25px", marginTop: "5px" }}
                />{" "}
                Профиль
              </li>
              <li
                style={{
                  width: "70%",
                  height: "64px",
                  color: activeLi === "cart" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor:
                    activeLi === "cart" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("cart")}
              >
                {" "}
                <img
                  src={back}
                  style={{ width: "25px", height: "25px", marginTop: "5px" }}
                />
                Корзина
              </li>
              <li
                style={{
                  width: "70%",
                  height: "64px",
                  color: activeLi === "favorites" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor:
                    activeLi === "favorites" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("favorites")}
              >
                {" "}
                <img
                  src={heart}
                  style={{ width: "25px", height: "25px", marginTop: "5px" }}
                />
                Избранные
              </li>
              <li
                style={{
                  width: "70%",
                  height: "64px",
                  color: activeLi === "history" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor:
                    activeLi === "history" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("history")}
              >
                {" "}
                <img
                  src={mallBack}
                  style={{ width: "25px", height: "25px", marginTop: "5px" }}
                />{" "}
                История покупок
              </li>
              <li
                style={{
                  width: "100%",
                  height: "64px",
                  color: activeLi === "logout" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  backgroundColor:
                    activeLi === "logout" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("logout")}
              >
                {" "}
                <img
                  src={out}
                  style={{ width: "25px", height: "25px", marginTop: "5px" }}
                />
                Выйти
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Личные данные</h2>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Email">
              <Input
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
              ,
            </Descriptions.Item>
            <Descriptions.Item label="Username">
              {userData.username}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              <Input
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
              />
              ,
            </Descriptions.Item>
            <Descriptions.Item label="Birthday">
              <DatePicker
                value={editedBirthday}
                onChange={(date) => setEditedBirthday(date)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Job">
              <Input
                value={editedJob}
                onChange={(e) => setEditedJob(e.target.value)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Specialization">
              <Select
                value={editedSpecialization}
                onChange={(value) => setEditedSpecialization(value)}
              >
                ,<Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
              ,
            </Descriptions.Item>
          </Descriptions>
          <button onClick={handleSaveChanges}>Save</button>
        </div>
      </div>
    </div>
  );
};
