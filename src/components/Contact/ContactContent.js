import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ContactBankInfor from "./ContactBankInfor";
import ContactInfor from "./ContactInfor";
import Feedback from "./Feedback";

export default function ContactContent() {
    return (
        <section className="contact-content">
            <Container>
                <ContactInfor />
                <ContactBankInfor />
                <Feedback />
            </Container>
        </section>
    );
}