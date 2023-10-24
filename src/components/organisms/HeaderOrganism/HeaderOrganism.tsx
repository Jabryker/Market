import { navbar } from '../../../assets/data/';
import logo from '../../../assets/images/HorecaArt/new_logo.png';

import { FC, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import {Link} from "react-router-dom";

export const HeaderOrganism: FC = () => {
      const [menuOpen, setMenuOpen] = useState<boolean>(false);
      const [searchQuery, setSearchQuery] = useState<string>('');
      const handleSearch = () => {
            console.log('поиск: ', searchQuery)
      };

      const toggleMenu = () => {
            setMenuOpen(!menuOpen);
      };

      return (
          <div>
                <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <Link to="/" className="flex items-center">
                                  <img src={logo} className="h-8 mr-3" alt="PMORDO Logo" />
                                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PM</span>
                            </Link>
                            <div className="flex items-center justify-center space-x-2 mt-2">
                                  <div className="flex rounded-2xl border border-blue-300 focus:ring focus:ring-blue-300">
                                        <select className="w-1/2 px-2 py-3 focus:outline-none">
                                              <option value=''>Фильтры</option>
                                              <option className="bg-blue-100 text-blue-800" value='name'>Названию</option>
                                              <option className="bg-green-100 text-green-800" value='category'>Категории</option>
                                              <option className="bg-yellow-100 text-yellow-800" value='address'>Адресу</option>
                                              <option className="bg-red-100 text-red-800" value='country'>Стране производителя</option>
                                              <option className="bg-indigo-100 text-indigo-800" value='brand'>Бренду</option>
                                              <option className="bg-pink-100 text-pink-800" value='fuelType'>Виду топлива</option>
                                              <option className="bg-purple-100 text-purple-800" value='priceLessThan'>Цена меньше чем</option>
                                              <option className="bg-gray-100 text-gray-800" value='priceGreaterThan'>Цена больше чем</option>
                                        </select>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-1/2 py-3 border-l-1 focus:outline-none"
                                            placeholder="Поиск"
                                        />
                                        <button
                                            onClick={handleSearch}
                                            className="py-3 bg-gradient-to-r from-[#EC9A1E] via-[#EC9A1E] to-[#ED5555] text-white font-semibold shadow-md transition focus:outline-none w-32 flex items-center justify-center rounded"
                                        >
                                              <AiOutlineSearch size={20} className="mr-2" /> Поиск
                                        </button>
                                  </div>
                            </div>
                            <button
                                onClick={toggleMenu}
                                className={`inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-transform duration-300 ease-in-out ${
                                    menuOpen ? "transform rotate-180" : ""
                                }`}
                                aria-expanded={menuOpen}
                            >
                                  <span className="sr-only">Open main menu</span>
                                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                                  </svg>
                            </button>
                            <div className={`w-full ${menuOpen ? "block" : "hidden"} transition-opacity duration-300 ease-in-out`}>
                                  <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                        {navbar.map(item => (
                                            <li key={item.id}>
                                                  <Link to={item.to} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 hover:text-white">
                                                        {item.label}
                                                  </Link>
                                            </li>
                                        ))}
                                  </ul>
                            </div>
                      </div>
                </nav>
          </div>
      );
};