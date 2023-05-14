import React from "react";
import { Navbar } from "./navbar.jsx";
import { Nav } from "./nav.jsx";

import Section from "./section.jsx";
import products from "../carsData";

function section(item) {
    return (
        <Section key={item.id} id={item.id} path={item.path} title={item.title} carOption={item.carOption} bgImg={item.backgroundImg} />
    )
}
function Homepage() {
    return (<div className="scroll">
        <Navbar />
        <Nav display={true} style={{}} />
        {products.map(section)}

    </div>
    )
}
export default Homepage;