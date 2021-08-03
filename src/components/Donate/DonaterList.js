import React from "react";
import { Container } from "react-bootstrap";

export default function DonaterList() {
    return (
        <section className="donater-list overlay">
            <Container>
                <h4 className="text-donater-list">Danh sách mạnh thường quân</h4>
                <a href="http://bit.ly/2RLgOgs" target="_blank" data-aos="zoom-out" aria-label="Xem thông tin" aria-labelledby="Xem thông tin">
                    <button className="donater-list-button">Xem thông tin</button>
                </a>
            </Container>
        </section>
    );
}