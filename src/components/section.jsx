import React from "react";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";


function Section(props) {
    const section = props.id + 1;

    const myRef = useRef();
    const [inView, setViewClass] = useState();

    const observerOption = {
        root: null,
        threshold: 0.5,
        // rootMargin: "-150px"
    }


    useEffect(() => {
        // console.log(myRef)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(() => {
                setViewClass(entries[0].isIntersecting)
                // console.log(entries[0].isIntersecting);
                // console.log(inView)
            })


        }, observerOption)
        observer.observe(myRef.current)

        
    });

    return <section ref={myRef} className="section " id={"section" + props.id} style={{ backgroundImage: `url("/img/${props.bgImg}")` }}>

        <div className="content">
            <h1 className={" fadeup Model" + props.id + `${inView ? " inview" : ""}`}>{props.title}</h1>
            <a href="" >
                <p className={"carOption fadeup " + `${inView ? "inview" : ""}`}>{props.carOption}</p>
            </a>
            <div className="btnDiv">
                <button className={"btn1 fadeup " + `${inView ? "inview" : ""}`}>View Inventory</button>
                <button className={"btn2 fadeup " + `${inView ? "inview" : ""}`}>Custom Order</button>
                <span style={{ display: "block" }}>

                    <i className="fa-solid fa-chevron-down " style={{ cursor: "pointer", width: "fit-content" }} onClick={() => {
                        window.scrollTo({
                            behavior: "smooth",

                            top: document.querySelector("#section" + section).offsetTop
                        })

                    }}></i>
                </span>

            </div>

        </div>
    </section>

}
export default Section;




// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {


//         if (entry.isIntersecting) {
//             console.log("hello")
//             entry.target.classList.add("inview");
//             observer.unobserve(entry.target);
//         }
//     })

// }, observerOption)
// function attachObserver() {
//     console.log("working..")
//     const elements = document.querySelectorAll(".fadeup")
//     elements.forEach((element) => {
//         observer.observe(element)
//     })
// }