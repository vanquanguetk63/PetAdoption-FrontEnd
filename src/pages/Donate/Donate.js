import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AnimalList from "../../components/AnimalList/AnimalList";
import DonateOther from "../../components/Donate/DonateOther/DonateOther";
import DonaterList from "../../components/Donate/DonaterList";
import DonateInformation from "../../components/Donate/Information/DonateInformation";
import Sponsor from "../../components/Donate/Sponsor/Sponsor";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Donate = () => {
    useEffect(() => {
        document.title="Ủng hộ";
    })
    return (
        <Container fluid>
            <Row>
                <Header />
                <DonateInformation />
                <Sponsor/>
                <DonateOther />
                <AnimalList />
                <DonaterList />
                <Footer />
            </Row>
        </Container>
    );
};

export default Donate;
