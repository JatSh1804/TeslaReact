import React from "react";
import products from "../carsData";
import { Nav } from "../components/nav";
import CarModel from "../Cars/CarModel";


function CarPage(props) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].title === props.model) {
            var cardata = products[i];
        }
    }
    return <section className="CarSection">
        <Nav display={false} style={NavStyle} />
        <div className="Car3D">
        <CarModel />
       </div>

        <div className="OptimizeOpt">
            <div className="contant">
                <div className="ChargingOffer"><h4>3 Year Free Supercharging</h4>
                    <p>{cardata.ChargingOffer}</p>
                </div>
                <h1>{cardata.title}</h1>
                <div className="details">
                    <p>Est. Delivery April 2023</p>
                    <div className="specs">

                        <div className="range">
                            <h2>{cardata.Range}<p>mi</p></h2>
                            <p>Range (EPA est.)</p>
                        </div>
                        <div className="top-speed">
                            <h2>{cardata.top_speed}<p>mph</p></h2>
                            <p>Top Speed</p>
                        </div>
                        <div className="accelaration">
                            <h2>{cardata.accelaration}<p>sec</p></h2>
                            <p>0-60 mph</p>
                        </div>
                    </div>
                </div>
                <form>

                    <label>Dual Motor All-Wheel Drive</label>
                    <button type="radio"><div>{cardata.title}</div> <div>${cardata.price}</div></button>

                    <label>Tri Motor All-Wheel Drive</label>
                    <button type="radio"><div>{cardata.title + " Plaid"}</div><div>${cardata.price}</div> </button>
                </form>
                <p>All prices are shown without potential incentives or gas savings of $6,600.</p>

                <div className="PlaidFeatures">
                    <h3>Plaid Upgrades</h3>
                    <p>Included</p>
                    <ul>
                        {cardata.PlaidFeatures.map((e) => {
                            return <li style={{ listStyleType: "initial" }}>{e}</li>
                        })}
                    </ul>

                </div>
                <div className="paint">
                    <h3>Paint</h3>
                    <div className="colour">
                        <img href="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?"></img>
                        {/* <img href=""/>
                        <img href=""/>
                        <img href=""/>
                        <img href=""/> */}

                    
                    </div>
                   
                </div>
            </div>
        </div>

    </section>

}


export default CarPage;
const NavStyle = {
    backdropFilter: "blur(25px)",
    // backgroundColor: "white",
    margin: "0",
    padding: "15px 10px",
}
