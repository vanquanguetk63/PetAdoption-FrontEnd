import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchList from "./SearchList";

export default function AdoptList() {
    return (
        <section className="adopt-list">
            <Container>
                <SearchList />
            </Container>
        </section>
    );
}