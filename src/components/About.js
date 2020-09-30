import React from 'react';
import bottomArrow from "../styles/assets/icons/double-arrow-bottom.svg"

const About = () => (
    <>
        <article className="jumbo snap" id="about">
            <ul className="navList">
                <div className="navLinkBox">
                    <li><a className="navLink" href="#about">About</a></li>
                </div>
                <div className="navLinkBox">
                    <li><a className="navLink" href="#projects">Projects</a></li>
                </div>
                <div className="navLinkBox">
                    <li><a className="navLink" href="#contact">Contact</a></li>
                </div>
            </ul>
            <section className="jumboName">
                <h1 className="heading">Oscar Wales</h1>
                <h2 className="subHeading">Junior Developer</h2>
            </section>
            <section>
                <p className="plainText description">I'm a recent graduate of Develop Me's Coding Fellowship Bootcamp with a passion for building beautiful webistes and apps using tidy and efficent code.</p>
                <img className="scrollWhite down" src={bottomArrow} alt="downwards pointing arrow"/>
            </section>
        </article>
    </>
);

export default About;