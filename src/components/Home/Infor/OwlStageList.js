import React from "react";

export default function OwlStageList({ List }) {
    return (
        <>
            {List.map((item, index) => {
                return (
                    <div key={index} className="owl-item">
                        <div className="service-box">
                            <div className="owl-content">
                                <div className="content">
                                    <div className="item">
                                        <div className="item-img">
                                            <img
                                                class="image img-fluid rounded-circle"
                                                src={item.imageUrl}
                                                alt=""
                                            ></img>
                                        </div>
                                        <h3 className="item-title">
                                            {item.title}
                                        </h3>
                                        <p className="item-descript">
                                            {item.description}
                                        </p>
                                    </div>
                                    <a href={item.path}>
                                        <button className="owl-button">
                                            Tìm hiểu thêm
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
