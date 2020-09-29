import React from 'react';
import bottomArrow from "../styles/assets/icons/double-arrow-bottom.svg"

const About = () => (
    <>
        <article class="jumbo">
            <ul class="navList">
                <div class="navLinkBox">
                    <li><a class="navLink">Home</a></li>
                </div>
                <div class="navLinkBox">
                    <li><a class="navLink">Projects</a></li>
                </div>
                <div class="navLinkBox">
                    <li><a class="navLink">Contact</a></li>
                </div>
            </ul>
            <section>
                <h1 class="heading">Oscar Wales</h1>
                <h2 class="subHeading">Junior Developer</h2>
            </section>
            <section>
                <p class="plainText description">I'm a recent graduate of Develop Me's Coding Fellowship Bootcamp with a passion for building beautiful webistes and apps using tidy and efficent code.</p>
                <img class="scrollWhite down" src={bottomArrow} alt="downwards pointing arrow"/>
            </section>
        </article>
    </>
);

export default About;