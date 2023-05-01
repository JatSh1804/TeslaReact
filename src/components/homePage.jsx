import React from "react";

import Section from "./section.jsx";
import products from "../carsData";
import Footer from "./footer.jsx";

function section(item) {
    return (
        <Section key={item.id} id={item.id} title={item.title} carOption={item.carOption} bgImg={item.backgroundImg} />
    )
}
function Homepage() {
    return (<div className="scroll">
        {products.map(section)}
      
    </div>
    )
}
export default Homepage;