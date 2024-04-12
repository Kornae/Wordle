import React from "react";
import Main from "./Main";
import Nav from "./Nav";


export default function Home() {
    return (
        <div id="home">
            <div id="nav"><Nav /></div>
            <div id="main"><Main /></div>
        </div>
    )

}