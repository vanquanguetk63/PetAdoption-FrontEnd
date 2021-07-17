import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <Container fluid> 
      <Row>
        <Header/>
      </Row>
    </Container>
  );
};

export default Home;
