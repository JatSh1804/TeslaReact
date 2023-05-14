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

// new fullpage(".scroll",{
//     autoScrolling: true,
//     scrollBar: true,
// })

