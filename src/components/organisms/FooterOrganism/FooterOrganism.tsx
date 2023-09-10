import { FC } from "react";
import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export const FooterOrganism: FC = () => {
  return (
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <section className="bg-[#47535F] rounded-t-[50px] py-16 text-white">
          <MDBContainer>
            <MDBRow className="mt-3">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Меню</h6>
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
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
                <ul className="list-none p-0 m-0">
                  <li>
                    <MDBIcon icon="phone" className="me-2" /> +996 999 000 000
                  </li>
                  <li>
                    <MDBIcon icon="fax" className="me-2" /> +996 312 000 000
                  </li>
                  <li>
                    <MDBIcon icon="map-marker-alt" className="me-2" />
                    Кыргызская Республика
                  </li>
                  <li>
                    <MDBIcon icon="map-marker-alt" className="me-2" />
                    г.Бишкек ул.Раззакова 1
                  </li>
                </ul>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Социальная сеть</h6>
                <ul className="list-none p-0 m-0">
                  <li>
                    <Link to="/" className="text-reset">
                      <MDBIcon fab icon="twitter" className="me-2" /> @ordomarket
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <MDBIcon fab icon="facebook" className="me-2" /> Ordo Market
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <MDBIcon fab icon="instagram" className="me-2" /> OrdoMarket
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <MDBIcon fab icon="linkedin" className="me-2" /> Ordo Market
                    </Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/*<div className="bg-[#47535F] text-white text-center py-4 rounded-b-[20px]">*/}
        {/*  <MDBIcon icon="map" size="4x" />*/}
        {/*  <p className="mb-0">Вставьте вашу карту сюда</p>*/}
        {/*  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.195154537091!2d74.60180787667169!3d42.86872490281335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d01117d319%3A0x619d0728714f1dc9!2zMSDRg9C7LiDQoNCw0LfQt9Cw0LrQvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1694351983990!5m2!1sru!2skg" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
        {/*</div>*/}
      </MDBFooter>
  );
};
