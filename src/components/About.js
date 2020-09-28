import React from 'react';
import bottomArrow from "../styles/assets/icons/double-arrow-bottom.svg"

const About = () => (
    <>
        <section class="jumbo">
            <ul class="navList">
                <li class="navLink">Home</li>
                <li class="navLink">Projects</li>
                <li class="navLink">Contact</li>
            </ul>
            <h1 class="heading">Oscar Wales</h1>
            <h2 class="subHeading">Junior Developer</h2>
            <p class="plainText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda doloremque nesciunt sapiente id molestias, vero eum, esse quisquam minima quam tenetur veniam! Accusantium ipsum placeat similique distinctio, repellendus qui?</p>
            <img class="scrollWhite" src={bottomArrow} alt="downwards pointing arrow"/>
        </section>
    </>
);

export default About;