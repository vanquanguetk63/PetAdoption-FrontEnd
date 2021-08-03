import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import FooterAbout from "./FooterAbout";
import Footercontact from "./FooterContact";

export default function Footer() {
    return (
        <div className="custom-footer">
            <Container>
                <Logo />
                <FooterAbout />
                <Footercontact />
            </Container>
        </div>
    );
}
