import React from "react";
import { Container } from "react-bootstrap";
import DonateOtherButton from "./DonateOtherButton";
import DonateOtherList from "./DonateOtherList";
import DonateOtherTitle from "./DonateOtherTitle";

export default function DonateOther() {
    return (
        <section className="donate-other">
            <Container>
                <DonateOtherTitle />
                <DonateOtherList />
                <DonateOtherButton />
            </Container>
        </section>
    );
}