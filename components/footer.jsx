import React from "react";

function Footer() {
    var fullYear= new Date().getFullYear();
    console.log(fullYear)
    return <footer>
        <div>
            <a href="https://github.com/JatSh1804">
                <i className="fa-brands fa-github fa-xl" ></i></a>
            <a href="https://instagram.com/m_mjatin">
                <i className="fa-brands fa-instagram fa-xl" ></i></a>
            <a href="https://twitter.com/jatin_1804">
                <i className="fa-brands fa-twitter fa-xl" ></i></a>
        </div>
        <span>{"Ⓒ Jatin "+fullYear}</span>
    </footer >

}
export default Footer;