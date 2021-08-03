import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";

const Adopt = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
};

export default Adopt;
