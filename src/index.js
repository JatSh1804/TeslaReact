import React from "react";
// import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";



createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
attachObserver()

// new fullpage(".scroll",{
//     autoScrolling: true,
//     scrollBar: true,
// })

const observerOption = {
    root: null,
    threshold: 0.1,
    rootMargin: "-150px"
}

const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach((entry) => {
        console.log(entry)
        
        // if (entry.isIntersecting) {
        //     entry.target.classList.add("inview");
        //     observer.unobserve(entry.target);
        // }
    })

},observerOption)
function attachObserver() {
    console.log("working")
    const elements = document.querySelectorAll(".fadeup")
    elements.forEach((element) => {
        observer.observe(element)
    })
}