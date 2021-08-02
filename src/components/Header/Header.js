import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import avartar from "../../asset/avartar.png";

const Header = () => {
    return (
        <div className="custom-header">
            <Container>
                <a className="avartar" href="/">
                    <img src={avartar} alt="" />
                </a>
                <NavLink
                    exact
                    to="/"
                    activeClassName="current"
                    className="nav_item"
                >
                    Trang chủ
                </NavLink>
                <NavLink
                    exact
                    to="/adopt"
                    activeClassName="current"
                    className="nav_item"
                >
                    Nhận nuôi
                </NavLink>
                <NavLink
                    exact
                    to="/donate"
                    activeClassName="current"
                    className="nav_item"
                >
                    Ủng hộ
                </NavLink>
                <NavLink
                    exact
                    to="/volunteer"
                    activeClassName="current"
                    className="nav_item"
                >
                    Tình nguyện viên
                </NavLink>
                <NavLink
                    exact
                    to="/contact"
                    activeClassName="current"
                    className="nav_item"
                >
                    Liên hệ
                </NavLink>
            </Container>
        </div>
    );
};

export default Header;
