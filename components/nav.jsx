import React from "react";
import products from "../carsData.js";
import Offer from "./offer.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Listitem(item, Hr) {
    return <li key={item.id}><a onClick={() => {
        // console.log(item.id)
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector("#section" + item.id).offsetTop
        })


    }
    }>{item.title}</a>
    </li>
}

function Nav(props) {
    const [scrollP, setPercent] = useState();
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight) * 100;
        // console.log(scrollPercent)
        setPercent(scrollPercent);
        // console.log(scrollP)

    })


    return <div className="fixed toBlur">
        {props.display ?  <Offer />: ""}
        {props.display?<div className="scrollProcess" style={{ width: `${scrollP}%` }} />:""}



        <nav style={props.style}>
            <Link to={"/"}><img  className="logo" src="/img/teslalogo.png" alt="Tesla" /></Link>
            {props.display ? <ul className="model">

                {products.map(Listitem)}
            </ul> : ""}


            <ul className="profile">
                <li> <a href="">Shop</a></li>
                <li> <a href="">Account</a> </li>
                {props.display ? <li className="menu"> <a onClick={navClick}>Menu</a> </li>
                    : ""}
            </ul>
        </nav>


    </div>

}


function navClick() {
    var menu = document.querySelector(".menu");
    // console.log(menu)
    document.querySelector(".navbar").style.display = "flex";
    document.querySelector(".navbar").classList.toggle("navAnimation");


    document.querySelector(".scroll").classList.toggle("blurEffect")
    document.querySelector(".fixed").classList.toggle("blurEffect")
}
export { Nav, Listitem };