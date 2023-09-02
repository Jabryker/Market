import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Input, Button, Badge } from "antd";
import { navbar } from "../../../assets/data/";
import store from "../../../store/store";
import logo from "../../../assets/images/logo.svg";

interface NavItem {
  id: number;
  to: string;
  label: string;
}

export const HeaderOrganism: FC = () => {
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
          <Input.Search
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
          />
          <Link to="/login"><Button className="ml-2">Войти</Button></Link>
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
