import { FC, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  HeartOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShopOutlined,
  ExceptionOutlined,
  WalletOutlined,
  FormOutlined,
} from "@ant-design/icons";
import ProfileChangeOrganism from "../../components/organisms/ProfileChangeOrganism/ProfileChangeOrganism";
import { IUser, IUserProfile } from "../../controllers/ProfileController";
import Profile from "../../assets/images/profile/ProfileFoto.jpg";
import ProfileCartOrganism from "../../components/organisms/ProfileCartOrganism/ProfileCartOrganism";
import ProfileShopOrganism from "../../components/organisms/ProfileShopOrganism/ProfileShopOrganism";
import ProfileFavoriteOrganism from "../../components/organisms/ProfileFavoriteOrganism.tsx/ProfileFavoriteOrganism";

const { Sider, Content } = Layout;

interface MyMenuProps {
  userData: IUserProfile | IUser;
  activeLi: string | null;
  handleLiClick: (key: string) => void;
}

const MyMenu: FC<MyMenuProps> = ({ userData, activeLi, handleLiClick }) => {
  return (
    <div>
      <div>
        <div style={{ width: "135px", height: "135px" }}>
          {userData.photo ? (
            <img
              src={userData.photo}
              alt={`${userData.email}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src={Profile}
              alt="User Photo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
        <h3
          style={{
            color: "#253138",
            fontSize: "18px",
            textAlign: "start",
          }}
        >
          {userData.username}
        </h3>
        <h4
          style={{
            color: "#253138",
            fontSize: "14px",
            textAlign: "start",
          }}
        >
          {userData.email}
        </h4>
      </div>
      <Menu
        mode="vertical"
        selectedKeys={[activeLi || "profile"]}
        onClick={({ key }) => handleLiClick(key.toString())}
      >
        <Menu.Item
          key="profile"
          icon={
            <UserOutlined style={{ fontSize: "32px", alignSelf: "center" }} />
          }
          style={{
            backgroundColor: activeLi === "profile" ? "#EC9A1E" : "transparent",
            width: "315px",
            height: "64px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            color: "#47535F",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Профиль
        </Menu.Item>
        {userData.role === "S" ? (
          <Menu.Item
            key="shop"
            icon={
              <ShopOutlined style={{ fontSize: "32px", alignSelf: "center" }} />
            }
            style={{
              backgroundColor: activeLi === "shop" ? "#EC9A1E" : "transparent",
              width: "315px",
              height: "64px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              color: "#47535F",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Магазин
          </Menu.Item>
        ) : null}
        <Menu.Item
          key="cart"
          icon={
            <ShoppingCartOutlined
              style={{ fontSize: "32px", alignSelf: "center" }}
            />
          }
          style={{
            backgroundColor: activeLi === "cart" ? "#EC9A1E" : "transparent",
            width: "315px",
            height: "64px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            color: "#47535F",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Корзина
        </Menu.Item>
        <Menu.Item
          key="favorites"
          icon={
            <HeartOutlined style={{ fontSize: "32px", alignSelf: "center" }} />
          }
          style={{
            backgroundColor:
              activeLi === "favorites" ? "#EC9A1E" : "transparent",
            width: "315px",
            height: "64px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            color: "#47535F",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Избранные
        </Menu.Item>
        <Menu.Item
          key="history"
          icon={
            <HistoryOutlined
              style={{ fontSize: "32px", alignSelf: "center" }}
            />
          }
          style={{
            backgroundColor: activeLi === "history" ? "#EC9A1E" : "transparent",
            width: "315px",
            height: "64px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            color: "#47535F",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          История покупок
        </Menu.Item>
        {userData.role === "S" ? (
          <Menu.Item
            key="tarif"
            icon={
              <ExceptionOutlined
                style={{ fontSize: "32px", alignSelf: "center" }}
              />
            }
            style={{
              backgroundColor: activeLi === "tarif" ? "#EC9A1E" : "transparent",
              width: "315px",
              height: "64px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              color: "#47535F",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Тариф
          </Menu.Item>
        ) : null}
        {userData.role === "S" ? (
          <Menu.Item
            key="wallet"
            icon={
              <WalletOutlined
                style={{ fontSize: "32px", alignSelf: "center" }}
              />
            }
            style={{
              backgroundColor:
                activeLi === "wallet" ? "#EC9A1E" : "transparent",
              width: "315px",
              height: "64px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              color: "#47535F",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Кошелек
          </Menu.Item>
        ) : null}
        {userData.role === "S" ? (
          <Menu.Item
            key="Stat"
            icon={
              <FormOutlined style={{ fontSize: "32px", alignSelf: "center" }} />
            }
            style={{
              backgroundColor: activeLi === "Stat" ? "#EC9A1E" : "transparent",
              width: "315px",
              height: "64px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              color: "#47535F",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Статьи
          </Menu.Item>
        ) : null}
        <Menu.Item
          key="logout"
          icon={
            <LogoutOutlined style={{ fontSize: "32px", alignSelf: "center" }} />
          }
          style={{
            backgroundColor: activeLi === "logout" ? "#EC9A1E" : "transparent",
            width: "315px",
            height: "64px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            color: "#47535F",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Выйти
        </Menu.Item>
      </Menu>
    </div>
  );
};

interface ProfileTemplateProps {
  userData: IUserProfile | IUser;
}

export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
  const [activeLi, setActiveLi] = useState<string | null>("profile");
  const usertype = localStorage.getItem("userInfo");

  const [currentOrganism, setCurrentOrganism] = useState<React.ReactNode>(
    <ProfileChangeOrganism userData={userData} />
  );

  useEffect(() => {
    if (usertype) {
      const userInfo = JSON.parse(usertype);
    }
  }, [usertype]);

  const handleLiClick = (key: string) => {
    setActiveLi(key);

    switch (key) {
      case "profile":
        setCurrentOrganism(<ProfileChangeOrganism userData={userData} />);
        break;
      case "shop":
        setCurrentOrganism(<ProfileShopOrganism userData={userData} />);
        break;
      case "cart":
        setCurrentOrganism(<ProfileCartOrganism userData={userData} />);
        break;
      case "favorites":
        setCurrentOrganism(<ProfileFavoriteOrganism userData={userData} />);
        break;
      default:
        setCurrentOrganism(<ProfileChangeOrganism userData={userData} />);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={400} theme="light">
        <MyMenu
          userData={userData}
          activeLi={activeLi}
          handleLiClick={handleLiClick}
        />
      </Sider>
      <Content style={{ padding: "100px" }}>
        <div style={{ padding: "20px" }}>{currentOrganism}</div>
      </Content>
    </Layout>
  );
};
