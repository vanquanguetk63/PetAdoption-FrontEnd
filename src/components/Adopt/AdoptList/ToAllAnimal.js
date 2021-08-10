import React from "react";
import { Container } from "react-bootstrap";

export default function ToAllAnimal() {
    return (
        <section className="to-all-animal">
            <Container>
                <h4 className="text">Tất Cả Các Ca Cứu Hộ</h4>
                <a href="/all-animal">
                    <button className="button">xem tất cả</button>
                </a>
            </Container>
        </section>
    );
}