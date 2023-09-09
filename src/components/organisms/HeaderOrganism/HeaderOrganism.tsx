import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Input, Button, Badge, Dropdown, Menu } from "antd";
import { navbar } from "../../../assets/data/";
import store from "../../../store/store";
import logo from "../../../assets/images/logo.svg";

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
  const [searchQuery, setSearchQuery] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    navigate(`/api/v1/stores/products/?search=${searchQuery}&category=&address=&price__gte=&price__lte=`);
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
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <Link to="/"> <img src={logo} alt="Logo" /> </Link>
        <ul className="text-black hidden md:flex">
          {navbar.map((item: NavItem) => (
            <li key={item.id} className="p-4">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center relative">
          <div className="flex space-x-2">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="large"
            />
            <Button
              type="primary"
              onClick={handleSearch}
              size="large"
              className="bg-[#EC9A1E] text-white flex items-center gap-2"
            >
              <AiOutlineSearch /> Поиск
            </Button>
          </div>

          {hasAccess && hasRefresh ? (
            <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
              <Button className="ml-2 bg-white" size="large">
                    Профиль
              </Button>
            </Dropdown>
          ) : (
            <Link to="/login">
              <Button className="ml-2 bg-white" size="large">
                    Вход
              </Button>
            </Link>
          )}

          <Link to="/cart" className="ml-4">
            <Badge count={cartItemsCount} showZero>
              <AiOutlineShoppingCart size={24} color="black" />
            </Badge>
          </Link>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose size={20} color="black" />
            ) : (
              <AiOutlineMenu size={20} color="black" />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-white capitalize">
          {navbar.map((item: NavItem) => (
            <li key={item.id} className="p-4">
              <Link to={item.to} className="border-b border-black-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
