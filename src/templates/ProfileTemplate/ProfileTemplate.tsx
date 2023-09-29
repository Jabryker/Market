import { FC, useState } from "react";
import { Descriptions, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { IUserProfile, IUser } from "../../controllers/ProfileController";
import userPng from "../../assets/images/profile/user.png";
import back from "../../assets/images/profile/border_all.png";
import heart from "../../assets/images/profile/heart small.png";
import mallBack from "../../assets/images/profile/icon-mallbag.png";
import Profile from "../../assets/images/profile/ProfileFoto.jpg";
import out from "../../assets/images/profile/Icon-logout.png";
import ProfileChangeOrganism from "../../components/organisms/ProfileChangeOrganism/ProfileChangeOrganism";

const { Option } = Select;

interface ProfileTemplateProps {
  userData: IUserProfile | IUser;
}

export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
  const [activeLi, setActiveLi] = useState<string | null>(null);

  const handleLiClick = (liName: string) => {
    setActiveLi(liName);
  };

  return (
    <div style={{ margin: "20px 0 300px" }}>
      <div style={{ padding: "20px", display: "flex" }}>
        <div
          className="col-span-1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            width: "30%",
            borderRight: "1px solid #979797",
          }}
        >
          {userData.photo ? (
            <img
              src={userData.photo}
              alt={`${userData.email}`}
              style={{ width: "135px", height: "135px" }}
            />
          ) : (
            <img
              src={Profile}
              alt="User Photo"
              style={{ width: "135px", height: "135px" }}
            />
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
                alignContent: "space-between",
                width: "100%",
                margin: "50px 0",
              }}
            >
              <li
                style={{
                  width: "85%",
                  height: "64px",
                  color: activeLi === "profile" ? "white" : "#47535F",
                  borderRadius: "10px",
                  padding: "15px",
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  display: "flex",
                  backgroundColor:
                    activeLi === "profile" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleLiClick("profile")}
              >
                <img
                  src={userPng}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                />{" "}
                Профиль
              </li>
              <li
                style={{
                  width: "85%",
                  height: "64px",
                  color: activeLi === "cart" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  backgroundColor:
                    activeLi === "cart" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "15px",
                }}
                onClick={() => handleLiClick("cart")}
              >
                {" "}
                <img
                  src={back}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                />
                Корзина
              </li>
              <li
                style={{
                  width: "85%",
                  height: "64px",
                  color: activeLi === "favorites" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  backgroundColor:
                    activeLi === "favorites" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "15px",
                }}
                onClick={() => handleLiClick("favorites")}
              >
                {" "}
                <img
                  src={heart}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                />
                Избранные
              </li>
              <li
                style={{
                  width: "85%",
                  height: "64px",
                  color: activeLi === "history" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  backgroundColor:
                    activeLi === "history" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "15px",
                }}
                onClick={() => handleLiClick("history")}
              >
                {" "}
                <img
                  src={mallBack}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                />{" "}
                История покупок
              </li>
              <li
                style={{
                  width: "85%",
                  height: "64px",
                  color: activeLi === "logout" ? "white" : "#47535F",
                  fontSize: "20px",
                  display: "flex",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  backgroundColor:
                    activeLi === "logout" ? "#EC9A1E" : "transparent",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "15px",
                }}
                onClick={() => handleLiClick("logout")}
              >
                {" "}
                <img
                  src={out}
                  style={{
                    width: "25px",
                    height: "25px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                />
                Выйти
              </li>
            </ul>
          </div>
        </div>
        <div style={{ padding: "0 70px", width: "70%" }}>
          <ProfileChangeOrganism userData={userData} />
        </div>
      </div>
    </div>
  );
};
