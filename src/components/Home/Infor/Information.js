import React from "react";
import { Container } from "react-bootstrap";
import Infor from "./Infor";
import OwlStage from "./OwlStage";

export default function Information() {
    return (
        <section className="information">
            <Container>
                <Infor />
                <OwlStage />
            </Container>
        </section>
    );
}
