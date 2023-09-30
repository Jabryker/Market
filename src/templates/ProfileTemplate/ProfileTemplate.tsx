import { FC, useState } from "react";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    ShopOutlined,
    HeartOutlined,
    DollarOutlined,
} from "@ant-design/icons";
import {ProfileContent} from "./ProfileContent/ProfileContent";

const { Sider, Content } = Layout;

export const ProfileTemplate: FC = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>("profile");

    const handleMenuSelect = (key: string) => {
        setSelectedMenuItem(key);
    };

    let content;

    switch (selectedMenuItem) {
        case "profile":
            content = <ProfileContent />;
            break;
        case "shop":
            content = <div>Контент магазина будет здесь</div>;
            break;
        case "favorites":
            content = <div>Контент избранных будет здесь</div>;
            break;
        case "tariff":
            content = <div>Контент тарифа будет здесь</div>;
            break;
        default:
            content = <div>Профиль</div>;
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
                    <Menu.Item key="shop" icon={<ShopOutlined />}>
                        Магазин
                    </Menu.Item>
                    <Menu.Item key="favorites" icon={<HeartOutlined />}>
                        Избранные
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
