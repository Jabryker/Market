import {
  HeartOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { FC, useEffect, useState } from "react";
import Profile from "../../assets/images/profile/ProfileFoto.jpg";
import ProfileChangeOrganism from "../../components/organisms/ProfileChangeOrganism/ProfileChangeOrganism";
import { IUser, IUserProfile } from "../../controllers/ProfileController";

const { Sider, Content } = Layout;

interface ProfileTemplateProps {
  userData: IUserProfile | IUser;
}

export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
  const [activeLi, setActiveLi] = useState<string | null>(null);
  const usertype = localStorage.getItem("userInfo");

  useEffect(() => {
    if (usertype) {
      const userInfo = JSON.parse(usertype);
      // Access userInfo.role and perform actions accordingly
      // For example, if userInfo.role === 'S', set the initial activeLi value
      // based on your requirements.
    }
  }, [usertype]);

  const handleLiClick = (liName: string) => {
    setActiveLi(liName);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="light">
        <Menu
          mode="vertical"
          selectedKeys={[activeLi || "profile"]}
          onClick={({ key }) => handleLiClick(key.toString())}
        >
          <Menu.Item key="profile" icon={<UserOutlined />}>
            Профиль
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
            Корзина
          </Menu.Item>
          <Menu.Item key="favorites" icon={<HeartOutlined />}>
            Избранные
          </Menu.Item>
          <Menu.Item key="history" icon={<HistoryOutlined />}>
            История покупок
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />}>
            Выйти
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
        <h3 style={{ color: "#253138", fontSize: "18px", textAlign: "center" }}>
          {userData.username}
        </h3>
        <h4 style={{ color: "#253138", fontSize: "14px", textAlign: "center" }}>
          {userData.email}
        </h4>
        <div style={{ padding: "20px" }}>
          <ProfileChangeOrganism userData={userData} />
        </div>
      </Content>
    </Layout>
  );
};

