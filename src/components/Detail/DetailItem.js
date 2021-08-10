import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailItem() {
  const { id } = useParams();
  const [infor, setInfro] = useState({});

  useEffect(() => {
    axios
      .get(`https://pure-earth-99144.herokuapp.com/api/pet/${id}`)
      .then((response) => {
        setInfro(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Row>
        <div class="col-sm-5 col-md-5 col-lg-5 float-left avatar-animal">
          <img
            data-src="https://hanoipetadoption.com/admin/user-content/Animal/118f8782-d1e5-42ba-bfc1-8b4042b77d4b.jpeg"
            class="img-fluid rounded img-lazy-load w-100"
            alt="Beans"
            src={infor ? infor.avatar : null}
          />
        </div>
        <div class="col-sm-7 col-md-7 col-lg-7 caption-adoption float-right">
          <h2 class="text-capitalize mt-3 mb-2">beans</h2>
          <ul class="list-unstyled adopt-card p-0 m-0">
            <li>
              <strong>Giống:</strong> {infor ? infor.name : ""}
            </li>
            <li>
              <strong>Màu sắc:</strong> {infor ? infor.breed : ""}
            </li>
            <li>
              <strong>Tuổi : </strong> {infor ? infor.age : ""}
            </li>
            <li>
              <strong>Cân nặng:</strong> {infor ? infor.weight : ""}
            </li>
            <li>
              <strong>Giới tính:</strong>{" "}
              {infor ? (infor.sex === "female" ? "Cái" : "Đực") : ""}
            </li>
            <li>
              <strong>Mã:</strong> {infor ? infor.petCode : ""}
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}
