import React from "react";
import products from "../carsData.js";
import Offer from "./offer.jsx";

function Listitem(item) {
    return <li key={item.id}><a href={"#section" + item.id}>{item.title}</a></li>
}

function Nav() {
    return <div className="fixed toBlur">
        <Offer />
        <nav>
            <img className="logo" src="/img/teslalogo.png" alt="Tesla" />
            <ul className="model">

                {products.map(Listitem)}
            </ul>


            <ul className="profile">
                <li> <a href="">Shop</a></li>
                <li> <a href="">Account</a> </li>
                <li className="menu"> <a onClick={navClick}>Menu</a> </li>
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
export  {Nav,Listitem};