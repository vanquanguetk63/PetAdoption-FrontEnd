import React from "react";
import "../Header/Header.css";
import Image from "react-bootstrap/Image";
import logo from "../../resources/images/logo.png";
import { Row, Container, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="custom-header fixed-top">
      <Container className="h-100">
        <Row className="custom-header-row justify-content-between h-100 align-items-center">
          <Col lg={3} className="logo">
            <Image fluid src={logo} />
          </Col>
          <Col lg={8}>
            <Nav className="custom-header-nav" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Trang chủ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/adopt">Nhận nuôi</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Ủng hộ</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Tin tức</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Sản phẩm</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Liên hệ</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
