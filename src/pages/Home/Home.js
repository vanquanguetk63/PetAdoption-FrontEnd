import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Sponsor from "../../components/Donate/Sponsor/Sponsor";
import AnimalList from "../../components/AnimalList/AnimalList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";
import Information from "../../components/Home/Infor/Information";

const Home = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    });
    return (
        <Container fluid>
            <Row>
                <Header />
                <Information />
                <AnimalList />
                <Sponsor />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
};

export default Home;
