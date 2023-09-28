import React, { useState } from "react";
import { IUser } from "../../../controllers/ProfileController";
import changeBtn from "../../../assets/images/profile/ChangeBtn.png";
import Profile from "../../../assets/images/profile/ProfileFoto.jpg";
import { profile } from "console";

interface ProfileChangeOrganismProps {
  userData: IUser;
}

const ProfileChangeOrganism: React.FC<ProfileChangeOrganismProps> = ({
  userData,
}) => {
  console.log(userData);

  return (
    <div style={{ fontFamily: "Inter" }}>
      <h2 style={{ color: "#47535F", fontSize: "24px", fontWeight: "500" }}>
        Личные данные:
      </h2>
      <div>
        {userData.photo ? (
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <img
              src={userData.photo}
              alt={userData.email}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                borderRadius: "50%",
              }}
            />
            <img
              src={changeBtn}
              style={{
                width: "42px",
                height: "42px",
                marginLeft: "-40px",
                marginBottom: "10px",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <img
              src={Profile}
              style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            />
            <img
              src={changeBtn}
              style={{
                width: "42px",
                height: "42px",
                marginLeft: "-40px",
                marginBottom: "10px",
              }}
            />
          </div>
        )}
      </div>
      <div className="userform">
        {userData.role !== "B" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 0",
            }}
          >
            <label
              htmlFor="type"
              style={{
                color: "rgba(71, 83, 95, 0.80)",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Продавец
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                width: "80%",
                height: "65px",
                background: "#D9D9D9",
                padding: "0 20px",
                fontSize: "18px",
                color: "#47535F",
                marginTop: "10px",
              }}
            >
              <input
                type="string"
                id="type"
                name="type"
                value={userData.type}
                style={{
                  background: "#D9D9D9",
                  width: "90%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
              <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
            </div>
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="userName"
            style={{
              color: "rgba(71, 83, 95, 0.80)",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Nickname
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              width: "80%",
              height: "65px",
              background: "#D9D9D9",
              padding: "0 20px",
              fontSize: "18px",
              color: "#47535F",
              marginTop: "10px",
            }}
          >
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              style={{
                background: "#D9D9D9",
                width: "90%",
                height: "100%",
                border: "none",
                outline: "none",
              }}
            />
            <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
          }}
        >
          <label
            htmlFor="email"
            style={{
              color: "rgba(71, 83, 95, 0.80)",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Email
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              width: "80%",
              height: "65px",
              background: "#D9D9D9",
              padding: "0 20px",
              fontSize: "18px",
              color: "#47535F",
              marginTop: "10px",
            }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              style={{
                background: "#D9D9D9",
                width: "90%",
                height: "100%",
                border: "none",
                outline: "none",
              }}
            />
            <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
          }}
        >
          <label
            htmlFor="phone_number
            "
            style={{
              color: "rgba(71, 83, 95, 0.80)",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Номер телефоны
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              width: "80%",
              height: "65px",
              background: "#D9D9D9",
              padding: "0 20px",
              fontSize: "18px",
              color: "#47535F",
              marginTop: "10px",
            }}
          >
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              value={userData.phone_number}
              style={{
                background: "#D9D9D9",
                width: "90%",
                height: "100%",
                border: "none",
                outline: "none",
              }}
            />
            <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
          </div>
        </div>

        {userData.role !== "B" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 0",
            }}
          >
            <label
              htmlFor="INN"
              style={{
                color: "rgba(71, 83, 95, 0.80)",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              ИНН
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                width: "80%",
                height: "65px",
                background: "#D9D9D9",
                padding: "0 20px",
                fontSize: "18px",
                color: "#47535F",
                marginTop: "10px",
              }}
            >
              <input
                type="number"
                id="INN"
                name="INN"
                value={userData.INN}
                style={{
                  background: "#D9D9D9",
                  width: "90%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
              <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
            </div>
          </div>
        ) : null}

        {userData.role !== "B" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 0",
            }}
          >
            <label
              htmlFor="INN"
              style={{
                color: "rgba(71, 83, 95, 0.80)",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Номер сертификата
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                width: "80%",
                height: "65px",
                background: "#D9D9D9",
                padding: "0 20px",
                fontSize: "18px",
                color: "#47535F",
                marginTop: "10px",
              }}
            >
              <input
                type="number"
                id="certificate_number"
                name="certificate_number"
                value={userData.certificate_number}
                style={{
                  background: "#D9D9D9",
                  width: "90%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
              <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
            </div>
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
          }}
        >
          <label
            htmlFor="phone_number
            "
            style={{
              color: "rgba(71, 83, 95, 0.80)",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Изменить пароль
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              width: "80%",
              height: "65px",
              background: "#D9D9D9",
              padding: "0 20px",
              fontSize: "18px",
              color: "#47535F",
              marginTop: "10px",
            }}
          >
            <input
              type="password"
              id="password"
              name="password"
              value={userData.phone_number}
              style={{
                background: "#D9D9D9",
                width: "90%",
                height: "100%",
                border: "none",
                outline: "none",
              }}
            />
            <img src={changeBtn} style={{ width: "31px", height: "31px" }} />
          </div>
        </div>
      </div>

      <button
        style={{
          width: "438px",
          height: "56px",
          background: "#47535F",
          borderRadius: "10px",
          fontSize: "18px",
          color: "#FFFFFF",
          margin: "20px 0",
        }}
      >
        Сохранить изменения
      </button>
    </div>
  );
};

export default ProfileChangeOrganism;
