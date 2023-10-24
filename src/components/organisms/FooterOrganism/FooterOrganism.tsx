import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import whatsapp from '../../../assets/images/contactIcons/whatsapp.svg';
import point from '../../../assets/images/contactIcons/point_footer.svg';

export const FooterOrganism: FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-lg-start text-muted">
      <section className="bg-gradient-to-b from-[#47535F] to-[#333] rounded-tl-[50px] rounded-tr-[50px] py-16 text-white">
        <div className="w-11/12 max-w-screen-2xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <h6 className="text-xl font-bold mb-4 text-left text-white">Меню</h6>
              <div className="flex justify-between justify-between text-white">
                <ul className="list-none flex flex-col items-start gap-4">
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

                <ul className="list-none flex flex-col items-start gap-4">
                  <li>
                    <Link to="/search" className="text-reset hover:text-gray-300">
                      Поиск
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-reset hover:text-gray-300">
                      Акция
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-reset hover:text-gray-300">
                      Отзывы
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                      Статьи
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                      Новости
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                      Доставка и оплата
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset hover:text-gray-300">
                      Язык
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-md-0 mb-4 flex justify-start md:justify-end">
              <div className="w-4/6 text-left">
                <h6 className="text-xl font-bold mb-4 text-white">Контакты</h6>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <img src={whatsapp} alt="whatsappicon" />
                    <div>
                      <h5>+996 999 000 000</h5>
                      <h5>+996 312 000 000</h5>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <img src={point} alt="map point" className="shrink-0"/>
                    <h5 className="text-left">Кыргызская Республика
                      г.Бишкек ул.Раззакова 1</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-md-0 mb-4 flex justify-start lg:justify-end">
              <div className="w-4/6 text-left">
                <h6 className="text-xl font-bold mb-4 text-white flex items-center">Социальная сеть</h6>
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset flex items-center hover:text-gray-300">
                      <AiOutlineTwitter className="me-2" />
                      <span className="text-gray">@ordomarket</span>
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
          </div>
          <p className="text-left text-[#A7B2BD] py-4 rounded-b-lg">
            &copy; 2023 Makers All rights reserved
          </p>
        </div>
      </section>
    </footer>
  );
};
