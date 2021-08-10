import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AdoptList from "../../components/Adopt/AdoptList/AdoptList";
import ToAllAnimal from "../../components/Adopt/AdoptList/ToAllAnimal";
import AdoptInformation from "../../components/Adopt/Information/AdoptInformation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";

const Adopt = () => {
  useEffect(() => {
    document.title = "Nhận nuôi";
  });
  return (
    <Container fluid>
      <Row>
        <Header />
        <AdoptInformation />
        <ToAllAnimal />
        <AdoptList />
        <DonateNow />
        <Footer />
      </Row>
    </Container>
  );
};

export default Adopt;
