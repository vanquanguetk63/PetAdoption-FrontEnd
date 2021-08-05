import React from "react";
import { Container, Row } from "react-bootstrap";

const AnimalList = () => {
  return (
    <Container fluid bsPrefix className="animal-list">
      <div className="sponsor-title">
        <h2>
          Bé ngoan trong tuần <i class="fas fa-paw"></i>
        </h2>
      </div>
    </Container>
  );
};

export default AnimalList;
