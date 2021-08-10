import React, { useEffect, useState, useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import Animal from "../../Animal/Animal";
import axios from "axios";

export default function AdoptList() {
  const [listAnimal, setListAnimal] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 12;
  const numPage = 5;

  useEffect(() => {
    axios
      .get("https://pure-earth-99144.herokuapp.com/api/pet")
      .then((response) => {
        setListAnimal(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="adopt-list">
      <Container
        fluid
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <Row className="d-flex justify-content-center">
          {listAnimal
            ? listAnimal
                .slice(page * pageSize, (page + 1) * pageSize)
                .map((object) => (
                  <div
                    className="animal-stage-card"
                    style={{ marginRight: 40, marginBottom: 40 }}
                    key={object._id}
                  >
                    <Animal props={object} />
                  </div>
                ))
            : null}
        </Row>
        <Row className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li
                class="page-item"
                onClick={() => {
                  setPage((page) => page - 1);
                }}
              >
                <a class="page-link">Previous</a>
              </li>
              {[...Array(numPage)].map((object, index) => (
                <li
                  class={index === page ? "page-item active" : "page-item"}
                  onClick={() => {
                    setPage(index);
                  }}
                >
                  <a class="page-link">{index + 1}</a>
                </li>
              ))}
              <li
                class="page-item"
                onClick={() => {
                  setPage((page) => page + 1);
                }}
              >
                <a class="page-link">Next</a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </section>
  );
}
