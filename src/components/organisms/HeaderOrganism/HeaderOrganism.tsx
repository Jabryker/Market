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
import { Dropdown } from "react-bootstrap";

const HeaderOrganism: FC = () => {
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
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-custom-1">
                  <FiUser />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" style={{ right: "0" }}>
                  <Dropdown.Item href="/profile">
                    <ImProfile /> Изменить профиль
                  </Dropdown.Item>
                  <Dropdown.Item href="/shop">
                    <LuShoppingBag /> Мои покупки
                  </Dropdown.Item>
                  <Dropdown.Item href="/favorite">
                    <AiOutlineHeart /> Избранные
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/logout">
                    <AiOutlineImport /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderOrganism;
