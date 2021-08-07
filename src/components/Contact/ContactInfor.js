import React from "react";

export default function ContactInfor() {
    return (
        <div className="contact-infor">
            <h3 className="infor-title">Thông Tin Liên Hệ</h3>
            <div className="infor-content">
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
        </div>
    );
}