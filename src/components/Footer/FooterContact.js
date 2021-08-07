import React from "react";

export default function Footercontact() {
    return (
        <div className="contact">
            <div className="title">Thông tin liên hệ</div>
            <hr className="space" />
            <div className="infor-item">
                <i className="fas fa-phone margin-icon "></i>
                <a
                    href="tel:123456789"
                    rel="noreferrer"
                    aria-label="123456789"
                    aria-labelledby="123456789"
                >
                    (+84) 123 456 789
                </a>
            </div>
            <div className="infor-item">
                <i className="fas fa-envelope margin-icon"></i>
                <a
                    href="mailto:petadoption@gmail.com"
                    rel="noreferrer"
                    aria-label="petadoption@gmail.com"
                    aria-labelledby="petadoption@gmail.com"
                >
                    petadoption@gmail.com
                </a>
            </div>
            <div className="infor-item">
                <i className="fas fa-map-marker margin-icon"></i>
                Hà Nội - Việt Nam
            </div>
        </div>
    );
}
