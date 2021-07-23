import React from "react";
import "../Header/Header.css";
import Image from "react-bootstrap/Image";
import logo from "../../resources/images/logo.png";
import { Row, Container, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="custom-header">
      <Container>
        <Row>
          <Col lg={3} className="logo">
            <Image fluid src={logo} />
          </Col>
          <Col lg={8}>
            <Nav className="custom-header-nav">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
