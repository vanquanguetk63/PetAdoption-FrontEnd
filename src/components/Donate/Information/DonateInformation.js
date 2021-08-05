import React from "react";
import { Container } from "react-bootstrap";
import DonateInfor from "./DonateInfor";

export default function DonateInformation() {
    return (
        <section className="donate-information">
            <Container>
                <DonateInfor />
            </Container>
        </section>
    );
}