import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ContactContent from "../../components/Contact/ContactContent";
import DonateOther from "../../components/Donate/DonateOther/DonateOther";
import DonaterList from "../../components/Donate/DonaterList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    useEffect(() => {
        document.title="Liên hệ";
    })
    return (
        <Container fluid>
            <Row>
                <Header />
                <ContactContent />
                <DonateOther />
                <DonaterList />
                <Footer />
            </Row>
        </Container>
    );
};

export default Contact;
