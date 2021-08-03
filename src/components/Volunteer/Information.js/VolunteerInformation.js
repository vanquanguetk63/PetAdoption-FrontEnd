import React from "react";
import { Container } from "react-bootstrap";
import VolunteerInfor from "./VolunteerInfor";

export default function VolunteerInformation() {
    return (
        <section className="donate-information">
            <Container>
                <VolunteerInfor />
            </Container>
        </section>
    );
}