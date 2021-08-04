import React from "react";
import avartar from "../../asset/avartar.png";

export default function Logo() {
    return (
        <div className="logo">
            <a className="avartar" href="/">
                <img src={avartar}/>
            </a>
            <div className="socail-list">
                <span className="socail__item"><a title="Facebook" href="https://www.facebook.com/" target="_blank"><i className="fas fa-facebook-f"/></a></span>
                <span className="socail__item"><a title="Youtube" href="https://www.youtube.com/" target="_blank"><i className="fas fa-youtube"/></a></span>
                <span className="socail__item"><a title="instagram" href="https://www.instagram.com/hanoipetadoption/" target="_blank"><i className="fas fa-instagram"/></a></span>
            </div>
        </div>
    );
}