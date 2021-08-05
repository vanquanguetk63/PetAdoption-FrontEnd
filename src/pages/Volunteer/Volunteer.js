import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DonateNow from "../../components/Home/DonateNow";
import VolunteerInformation from "../../components/Volunteer/Information.js/VolunteerInformation";
import VolunteerOption from "../../components/Volunteer/Volunter_Option/VolunteerOption";

const Volunteer = () => {
    return (
        <Container fluid>
            <Row>
                <Header />
                <VolunteerInformation />
                <VolunteerOption />
                <DonateNow />
                <Footer />
            </Row>
        </Container>
    );
};

export default Volunteer;
