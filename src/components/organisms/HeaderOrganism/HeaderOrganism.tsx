import { FC } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineImport, AiOutlineHeart } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { LuShoppingBag } from "react-icons/lu";

export const HeaderOrganism: FC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Market
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Collapse id="offcanvasNavbar-expand">
            <Nav className="mx-auto">
              <Nav.Link href="#action1">Главная</Nav.Link>
              <Nav.Link href="#action2">О нас</Nav.Link>
              <Nav.Link href="#action2">Контакты</Nav.Link>
              <Nav.Link href="/login">Вход</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav>
              <Nav.Link href="#cart">
                <FiShoppingCart />
              </Nav.Link>
              <NavDropdown
                title={<FiUser />}
                id="offcanvasNavbarProfileDropdown-expand"
                style={{ marginLeft: "auto", marginRight: "30px" }}
              >
                <NavDropdown.Item href="/profile">
                  <ImProfile /> Изменить профиль
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop">
                  <LuShoppingBag /> Мои покупки
                </NavDropdown.Item>
                <NavDropdown.Item href="/favorite">
                  <AiOutlineHeart /> Избранные
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">
                  <AiOutlineImport /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
