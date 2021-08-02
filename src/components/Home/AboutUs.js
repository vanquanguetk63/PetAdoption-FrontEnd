import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";

export default function AboutUs() {
    return (
        <Container fluid>
            <Row>
                <Header />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
}
