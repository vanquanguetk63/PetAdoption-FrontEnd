import React from "react";
import avartar from "../../asset/avartar.png";
import facebook from "../../asset/facebook.svg";
import youtube from "../../asset/youtube.svg";
import instagram from "../../asset/instagram.svg";

export default function Logo() {
    return (
        <div className="logo">
            <a className="avartar" href="/">
                <img src={avartar}/>
            </a>
            <div className="socail-list">
                <span className="socail__item"><a title="Facebook" href=""><i className="fas fa-facebook-f"/></a></span>
                <span className="socail__item"><a title="Youtube" href=""><i className="fas fa-youtube"/></a></span>
                <span className="socail__item"><a title="instagram" href=""><i className="fas fa-instagram"/></a></span>
            </div>
        </div>
    );
}