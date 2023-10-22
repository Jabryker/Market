import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export const FooterOrganism: FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-lg-start text-muted">
      <section className="bg-gradient-to-b from-[#47535F] to-[#333] rounded-tl-[50px] rounded-tr-[50px] py-16 text-white">
        <div className="w-11/12 max-w-screen-2xl m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <h6 className="text-xl font-bold mb-4 text-left mx-6 text-white">Меню</h6>
              <div className="flex gap-4 items-center text-white">
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Главная
                    </Link>
                  </li>
                  <li>
                    <Link to="/search" className="text-reset hover:text-gray-300">
                        Все продукты
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-reset hover:text-gray-300">
                        Профиль
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-reset hover:text-gray-300">
                        Корзина
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Настройки
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Контакты
                    </Link>
                  </li>
                </ul>

                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Главная
                    </Link>
                  </li>
                  <li>
                    <Link to="/search" className="text-reset hover:text-gray-300">
                        Все продукты
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-reset hover:text-gray-300">
                        Профиль
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-reset hover:text-gray-300">
                        Корзина
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Настройки
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                        Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-md-0 mb-4">
              <h6 className="text-xl font-bold mb-4 text-white">Контакты</h6>
              <ul className="list-none p-0 m-0">
                <li>
                  <p className="me-2 text-white"> +996 999 000 000</p>
                </li>
                <li>
                  <p className="me-2 text-white"> +996 312 000 000</p>
                </li>
                <li>
                  <p className="me-2 text-white">Кыргызская Республика</p>
                </li>
                <li>
                  <p className="me-2 text-white">г.Бишкек ул.Раззакова 1</p>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="text-xl font-bold mb-4 text-white flex items-center">Социальная сеть</h6>
              <ul className="list-none p-0 m-0">
                <li>
                  <Link to="/" className="text-reset flex items-center hover:text-gray-300">
                    <AiOutlineTwitter className="me-2" />
                    <span className="text-white">@ordomarket</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset flex items-center hover:text-gray-300">
                    <AiOutlineFacebook className="me-2" />
                    <span className="text-white">Ordo Market</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset flex items-center hover:text-gray-300">
                    <AiOutlineInstagram className="me-2" />
                    <span className="text-white">OrdoMarket</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset flex items-center hover:text-gray-300">
                    <AiOutlineLinkedin className="me-2" />
                    <span className="text-white">Ordo Market</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-left text-[#A7B2BD] py-4 rounded-b-lg">
              &copy; 2023 Makers All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
};
