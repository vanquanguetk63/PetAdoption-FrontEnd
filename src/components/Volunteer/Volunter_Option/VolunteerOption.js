import React from "react";
import { Container } from "react-bootstrap";
import CleanUpVolunteer from "./CleanUpVolunteer";
import FosterVolunteer from "./FosterVolunteer";
import OptionTitle from "./OptionTitle";
import Participate from "./Participate";
import RescueVolunteer from "./RescueVolunteer";
import TransportVolunteer from "./TransportVolunteer";

export default function VolunteerOption () {
    return (
        <section className="option">
            <Container>
                <OptionTitle />
                <FosterVolunteer />
                <hr />
                <CleanUpVolunteer />
                <hr />
                <RescueVolunteer />
                <hr />
                <TransportVolunteer />
                <Participate />
            </Container>
        </section>
    );
}