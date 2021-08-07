import React from "react";

const Animal = () => {
  return (
    <div className="animal h-100 w-100 bg-light">
      <div className="col-12 p-0">
        <div className="adopt-image d-flex flex-wrap align-items-center">
          <a
            href="https://hanoipetadoption.com/vi/thu-cung/sasin-21055"
            aria-label="Sasin"
            aria-labelledby="Sasin"
            className="w-100"
          >
            <img
              src="https://hanoipetadoption.com/admin/user-content/Animal/675274e6-4178-42c3-8a4e-279f90b91ab4.jpeg"
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
              <b>Sasin</b>
            </a>
          </h5>
          <hr className="small-divider left" />
          <ul className="list-unstyled adopt-card p-0 m-0 pb-3">
            <li style={{ height: 36 }}>
              <strong>Giới tính:</strong> Chưa rõ
            </li>
            <li style={{ height: 36 }}>
              <strong>Tuổi:</strong> Trẻ
            </li>
            <li style={{ height: 36 }}>
              <strong>Tiêm phòng:</strong> Chưa rõ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Animal;
