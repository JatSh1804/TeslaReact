import React from "react";
// import products from "../carsData";

function Section(props) {
    return <section className="section " id={"section" + props.id} style={{ backgroundImage: `url("/img/${props.bgImg}")` }}>

        {/* {console.log(props)} */}
        <div className="content">
            <h1 className={"Model"+ props.id + " ' ' fadeup"}>{props.title}</h1>
            <a href="">
                <p className="carOption fadeup">{props.carOption}</p>
            </a>
            <div className="btnDiv">
                <button className="btn1 fadeup">View Inventory</button>
                <button className="btn2 fadeup">Custom Order</button>
                <i className="fa-solid fa-chevron-down "></i>

            </div>

        </div>
    </section>
}
export default Section;