import React from 'react';
import bottomArrow from "../styles/assets/icons/double-arrow-bottom.svg"

const About = () => (
    <>
        <article className="jumbo snap" id="about">
            <div className="dropdown navList">
                <button className="dropBtn">Menu</button>
                <ul className="dropContent">
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
            </div>
            <section className="jumboName">
                <h1 className="heading">Oscar Wales</h1>
                <h2 className="subHeading">Full Stack Developer</h2>
            </section>
            <section className="bottomJumbo">
                <p className="plainText description">I'm a recent graduate of Develop Me's Coding Fellowship Bootcamp with a passion for building beautiful websites and apps using tidy and efficient code.</p>
            </section>
            <a href="#projects"><img className="scrollWhite down bounceDown" src={bottomArrow} alt="downwards pointing arrow"/></a>
        </article>
    </>
);

export default About;