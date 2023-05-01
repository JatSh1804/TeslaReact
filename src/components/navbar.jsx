import React from "react";
import Navlist from "./navList.jsx";

function Navbar() {
    return <div className="navbar">
        <div className="blur" onClick={removeNav}></div>
        <div className="nav-list">
            <Navlist />
        </div>
    </div>
}
function removeNav() {
    document.querySelector(".navbar").classList.toggle("navAnimation")
    document.querySelector(".navbar").classList.toggle("navRemove")
    setTimeout(() => {
        document.querySelector(".navbar").style.display = "none";
    }, 500);

    // -------blurring the Background---------
    document.querySelector(".fixed").classList.toggle("blurEffect")
    document.querySelector(".scroll").classList.toggle("blurEffect")
}

export  {Navbar, removeNav}; 