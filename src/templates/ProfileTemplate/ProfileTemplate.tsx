import {
  DollarOutlined,
  HeartOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { FC, useState } from "react";
import { ProfileContent } from "./ProfileContent/ProfileContent";
import { ProfileFavorite } from "./ProfileFavorite/ProfileFavorite";
import { ProfileShop } from "./ProfileShop/ProfileContent";
import { ProfileTariff } from "./ProfileTariff/ProfileTariff";
import { ProfileWallet } from "./ProfileWallet/ProfileWallet";

const { Sider, Content } = Layout;

export const ProfileTemplate: FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("profile");

  const handleMenuSelect = (key: string) => {
    setSelectedMenuItem(key);
  };

  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString !== null ? JSON.parse(userInfoString) : "";
  const userRole = userInfo.role;

  let content;

  switch (selectedMenuItem) {
    case "profile":
      content = <ProfileContent />;
      break;
    case "favorites":
      content = <ProfileFavorite />;
      break;
    case "wallet":
      content = <ProfileWallet />;
      break;
    case "tariff":
      content = <ProfileTariff />;
      break;
    default:
      content = null;
  }

  if (userRole === "S" && selectedMenuItem === "shop") {
    content = <ProfileShop />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="light">
        <Menu
          mode="vertical"
          theme="light"
          selectedKeys={[selectedMenuItem]}
          onSelect={({ key }) => handleMenuSelect(key.toString())}
        >
          <Menu.Item key="profile" icon={<UserOutlined />}>
            Профиль
          </Menu.Item>
          {userRole === "S" && (
            <Menu.Item key="shop" icon={<ShopOutlined />}>
              Магазин
            </Menu.Item>
          )}
          <Menu.Item key="favorites" icon={<HeartOutlined />}>
            Избранные
          </Menu.Item>
          <Menu.Item key="wallet" icon={<DollarOutlined />}>
            Кошелёк
          </Menu.Item>
          <Menu.Item key="tariff" icon={<DollarOutlined />}>
            Тариф
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "24px" }}>{content}</Content>
      </Layout>
    </Layout>
  );
};
