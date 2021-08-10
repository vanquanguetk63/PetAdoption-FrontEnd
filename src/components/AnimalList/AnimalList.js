import React, { useMemo, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Animal from "../Animal/Animal";
import axios from "axios";

const AnimalList = () => {
  const [indexItem, setIndexItem] = useState(0);
  const [listAnimal, setListAnimal] = useState([]);

  const onNextItem = () => {
    if (indexItem < 3) {
      setIndexItem((indexItem) => indexItem + 1);
    }
  };

  const onPrevItem = () => {
    if (indexItem > 0) {
      setIndexItem((indexItem) => indexItem - 1);
    }
  };

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

  const transformAnimation = useMemo(
    () => ({
      transform: `translateX(${-255 * indexItem}px)`,
      transition: "all 0.5s ease 0s",
    }),
    [indexItem]
  );

  return (
    <Container
      fluid
      bsPrefix
      className="animal-list d-flex flex-column align-items-center"
    >
      <div className="animal-list-title">
        <h2>
          Bé ngoan trong tuần <i class="fas fa-paw"></i>
        </h2>
      </div>
      <div className="animal-box d-flex flex-column ">
        <div className="animal-stage-outer">
          <div className="animal-stage w-100 h-100">
            <div className="animal-stage-content h-100">
              {listAnimal
                ? listAnimal.slice(0, 7).map((object) => (
                    <div
                      className="animal-stage-card"
                      style={transformAnimation}
                      key={object._id}
                    >
                      <Animal props={object} />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div class="animal-nav h-100 w-100">
            <div
              class={`animal-prev ${indexItem === 0 ? "disabled" : ""}`}
              onClick={onPrevItem}
            >
              <i class="fa fa-chevron-left"></i>
            </div>
            <div
              class={`animal-next ${indexItem === 3 ? "disabled" : ""}`}
              onClick={onNextItem}
            >
              <i class="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <a href="/adopt">
            <button className="animal-infor-button">Nhận nuôi</button>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AnimalList;
