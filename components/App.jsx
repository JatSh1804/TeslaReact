import React from "react";

import Offer from "./offer.jsx";
import { Nav } from "./nav.jsx";
import { Navbar } from "./navbar.jsx";
import CarPage from "../Pages/CarCustomize.jsx";
import Homepage from "./homePage.jsx";
import products from "../carsData.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function App() {
    return <Router>
    <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ModelS" element={<CarPage model="Model S" />} />
            <Route path="/Model3" element={<CarPage model="Model 3" />} />
            <Route path="/ModelY" element={<CarPage model="Model Y" />} />
            <Route path="/ModelX" element={<CarPage model="Model X" />} />


        </Routes>


    </Router>
}
export default App;
