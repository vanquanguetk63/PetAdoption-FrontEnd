import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DonaterList from "../../components/Donate/DonaterList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
                <DonaterList />
                <Footer />
            </Row>
        </Container>
    );
};

export default Contact;
