import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import DonateNow from "../DonateNow";
import AboutInformation from "./AboutInformation";
import AboutUsList from "./AboutUsList";

export default function AboutUs() {
    return (
        <Container fluid>
            <Row>
                <Header />
                <AboutInformation />
                <AboutUsList />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
}
