import React, { useState } from "react";
import products from "../carsData.js";
import { Listitem } from "./nav.jsx";
import Footer from "./footer.jsx";
import {removeNav} from "./navbar.jsx";
import { Link } from "react-router-dom";

function Nav_list() {
  
    return <div className="navDiv">
        <span className="close material-symbols-outlined">
            <a onClick={removeNav}>
                close
            </a>
        </span>
        <ul>
            {products.map(Listitem)}
        </ul>
        <Footer />
    </div>

}

export default Nav_list;