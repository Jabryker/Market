import { Badge, Button, Dropdown, Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
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
  const [scrolling, setScrolling] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const subHeaderHeight = 50;

  const handleScroll = () => {
    if (window.scrollY > subHeaderHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };


  const handleSearch = (searchValue: string) => {
    // Выполните необходимую логику поиска (например, отправьте запрос на сервер)
    // Здесь предполагается, что результат поиска - это массив объектов продуктов, найденных по запросу.

    // После получения результатов поиска, выполните переход на страницу /product с параметром поиска:
    navigate(`/product?search=${encodeURIComponent(searchValue)}`);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
       <div className={`bg-[#F3F2F2] py-4 ${scrolling ? "fixed top-0 left-0 w-full z-50" : ""}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          <div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-300"
              placeholder="Поиск товаров"
            />
            <button
              onClick={() => handleSearch(searchValue)}
              className="px-3 py-2 bg-gradient-to-r from-[#EC9A1E] via-[#EC9A1E] to-[#ED5555] text-white font-semibold rounded-r-full shadow-md transition focus:outline-none w-32"
            >
              Поиск
            </button>
          </div>

          <div className="flex items-center">
            {hasAccess && hasRefresh ? (
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button className="ml-4 text-white">Профиль</Button>
              </Dropdown>
            ) : (
              <Link to="/login">
                <button className="ml-4 bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] font-semibold py-2 px-4 rounded-[10px] shadow-md border border-[#47535F] transition duration-300 ease-in-out">
                    Войти
                </button>
              </Link>
            )}

            <Link to="/cart" className="mx-10 text-[#333] hover:text-blue-300">
              <Badge count={cartItemsCount} showZero>
                <AiOutlineShoppingCart size={24} />
              </Badge>
            </Link>
            <div onClick={handleNav} className="cursor-pointer">
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
              <Link
                to={item.to}
                className="border-b border-[#999] hover:text-blue-300 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
