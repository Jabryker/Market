import { Badge, Button, Dropdown, Menu } from "antd";
import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { navbar } from "../../../assets/data/";
import logo from "../../../assets/images/logo.svg";
import store from "../../../store/store";

interface NavItem {
  id: number;
  to: string;
  label: string;
}

interface IHeaderOrganismProps {
  userType?: string;
}

export const HeaderOrganism: FC<IHeaderOrganismProps> = ({ userType = "" }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const cartItemsCount = store.getState().cart.cartItems.reduce((total, item) => total + item.quantity, 0);

  const hasAccess = localStorage.getItem("access") || sessionStorage.getItem("access");
  const hasRefresh = localStorage.getItem("refresh") || sessionStorage.getItem("refresh");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
    navigate("/");
  };

  const menu = (
    <Menu>
      {hasAccess && hasRefresh ? (
        userType === "buyer" ? (
          <Menu.Item key="profile-buyer">
            <Link to="/profile/buyer/:id">Профиль покупателя</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="profile-seller">
            <Link to="/profile/seller/:id">Профиль продавца</Link>
          </Menu.Item>
        )
      ) : null}
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>
          Выйти из аккаунта
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="bg-[#F3F2F2] py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
          <ul className="hidden md:flex space-x-4">
            {navbar.map((item: NavItem) => (
              <li key={item.id}>
                <Link to={item.to} className="text-[#333] hover:text-blue-300 font-semibold text-lg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            {hasAccess && hasRefresh ? (
              <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
                <Button className="ml-4 text-white">
                      Профиль
                </Button>
              </Dropdown>
            ) : (
              <Link to="/login">
                <button className="ml-4 bg-[#EC9A1E] hover:bg-[#ED5555] text-white font-semibold py-2 px-4 rounded-full shadow-md transition">
                  <AiOutlineUser className="inline-block mr-2" /> Войти в аккаунт
                </button>
              </Link>
            )}

            <Link to="/cart" className="ml-4 text-[#333] hover:text-blue-300">
              <Badge count={cartItemsCount} showZero>
                <AiOutlineShoppingCart size={24} />
              </Badge>
            </Link>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
              {nav ? (
                <AiOutlineClose size={24} color="#333" />
              ) : (
                <AiOutlineMenu size={24} color="#333" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-gray-600 ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-white capitalize">
          {navbar.map((item: NavItem) => (
            <li key={item.id} className="p-4">
              <Link to={item.to} className="border-b border-[#999] hover:text-blue-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
