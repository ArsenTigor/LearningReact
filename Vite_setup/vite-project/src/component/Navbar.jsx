import React from "react";
import Dogo from "../assets/doggo.jpeg";

export default function Navbar() {
    return (
        <div className="navbar">
            <Left />
            <Right />
        </div>
    )
}

function Left(){
    return (
        <div className="left">
            <img src={Dogo} className="doggo" alt="doggo" />
            ReactFacts
        </div>
    )
}

function Right(){
    return (
        <div className="right">
            React Course - Project 1
        </div>
    )
}