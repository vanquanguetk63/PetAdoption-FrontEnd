import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

export default function AllAnimal() {
    useEffect(() => {
        document.title="Tất cả các ca cứu hộ";
    })
    return (
        <Container fluid>
            <Row>
                <Header />
                <Footer />
            </Row>
        </Container>
    );
}