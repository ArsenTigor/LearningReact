import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
        </div>
    );
}