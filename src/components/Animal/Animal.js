import React from "react";

const Animal = ({ props }) => {
  return (
    <div className="animal h-100 w-100 bg-light">
      <div className="col-12 p-0">
        <div className="adopt-image d-flex flex-wrap align-items-center">
          <a
            href={`/animal/${props.petCode}`}
            aria-label="Sasin"
            aria-labelledby="Sasin"
            className="w-100"
          >
            <img
              src={props.avatar}
              className="img-fluid w-100"
              alt="Sasin"
              style={{ height: 218 }}
            />
          </a>
        </div>
      </div>
      <div className="col-12 p-0">
        <div className="caption-adoption">
          <h5
            className="adoption-header text-truncate mt-2"
            style={{ height: 25 }}
          >
            <a
              href="https://hanoipetadoption.com/vi/thu-cung/sasin-21055"
              aria-label="Sasin"
              aria-labelledby="Sasin"
              className="text-capitalize"
            >
              <b>{props.name}</b>
            </a>
          </h5>
          <hr className="small-divider left" />
          <ul className="list-unstyled adopt-card p-0 m-0 pb-3">
            <li style={{ height: 36 }}>
              <strong>Giới tính:</strong>{" "}
              {props.sex === "female" ? "Nữ" : "Nam"}
            </li>
            <li style={{ height: 36 }}>
              <strong>Tuổi:</strong> {props.age}
            </li>
            <li style={{ height: 36 }}>
              <strong>Tiêm phòng:</strong>{" "}
              {props.isDiseaseVac ? "Đã tiêm" : "Chưa rõ"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Animal;
