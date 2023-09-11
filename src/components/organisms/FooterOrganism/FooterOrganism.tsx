import { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export const FooterOrganism: FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <section className="bg-[#47535F] rounded-t-[50px] py-16 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Меню</h6>
              <div className="flex gap-10">
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset">
                        Главная
                    </Link>
                  </li>
                  <li>
                    <Link to="/search" className="text-reset">
                        Все продукты
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-reset">
                        Профиль
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-reset">
                        Корзина
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        Настройки
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        Контакты
                    </Link>
                  </li>
                </ul>

                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset">
                        Главная
                    </Link>
                  </li>
                  <li>
                    <Link to="/search" className="text-reset">
                        Все продукты
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-reset">
                        Профиль
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-reset">
                        Корзина
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        Настройки
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                        Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-md-0 mb-4">
              <h6 className="text-uppercase font-bold mb-4">Контакты</h6>
              <ul className="list-none p-0 m-0">
                <li>
                  <p className="me-2"> +996 999 000 000</p>
                </li>
                <li>
                  <p className="me-2"> +996 312 000 000</p>
                </li>
                <li>
                  <p className="me-2">Кыргызская Республика</p>
                </li>
                <li>
                  <p className="me-2">г.Бишкек ул.Раззакова 1</p>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Социальная сеть</h6>
              <ul className="list-none p-0 m-0">
                <li>
                  <Link to="/" className="text-reset">
                    <AiOutlineTwitter className="me-2" />
                    <span className="text-[#A7B2BD]">@ordomarket</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset">
                    <AiOutlineFacebook className="me-2" />
                    <span className="text-[#A7B2BD]">Ordo Market</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset">
                    <AiOutlineInstagram className="me-2" />
                    <span className="text-[#A7B2BD]">OrdoMarket</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-reset">
                    <AiOutlineLinkedin className="me-2" />
                    <span className="text-[#A7B2BD]">Ordo Market</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-left text-[#A7B2BD] bg-[#47535F]">© 2023 Makers All rights reserved</p>
        </div>
      </section>
      <div className="bg-[#47535F] text-white text-center py-4 rounded-b-[20px]">
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.195154537091!2d74.60180787667169!3d42.86872490281335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d01117d319%3A0x619d0728714f1dc9!2zMSDRg9C7LiDQoNCw0LfQt9Cw0LrQvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1694351983990!5m2!1sru!2skg"
            width="1000"
            height="212"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ maxWidth: "100%", height: "auto" }}
          ></iframe>
        </div>
      </div>
    </footer>
  );
};
