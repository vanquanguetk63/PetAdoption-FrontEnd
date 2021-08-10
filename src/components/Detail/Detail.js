import axios from "axios";
import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DonateNow from "../Home/DonateNow";
import AboutInformation from "../Adopt/Information/AdoptInformation";
import AnimalList from "../AnimalList/AnimalList"
import DetailItem from "./DetailItem";


export default function Detail({id}) {
    console.log(id);
    useEffect(() => {
        axios
          .get(`https://pure-earth-99144.herokuapp.com/api/pet/:${id}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
    
    return(
        <Container fluid>
            <Row>
                <Header />
                <DetailItem />
                <DonateNow />
                <AboutInformation />
                <AnimalList />
                <Footer />
            </Row>
        </Container>
    )
}