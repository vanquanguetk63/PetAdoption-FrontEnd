import React from "react";
import { Container } from "react-bootstrap";

export default function DonateNow() {
    return (
        <section className="donate-now overlay">
            <Container>
                <h4 className="text-donate">Bạn đã sẵn sàng giúp đỡ?</h4>
                <a href="/about-us">
                    <button className="button-donate">Ủng hộ ngay</button>
                </a>
            </Container>
        </section>
    );
}
