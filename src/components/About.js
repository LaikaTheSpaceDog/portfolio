import React from 'react';
import {useState} from 'react';
import bottomArrow from "../styles/assets/icons/double-arrow-bottom.svg"

const About = () => {

    const [showDrop, setShowDrop] = useState(false);
    let current = showDrop;
    const drop = () => setShowDrop(!current);

    return (
        <>
            <article className="jumbo snap section__constrained" id="about">
                <div className="dropdown navList">
                    <button className="dropBtn" onClick={drop}>Menu</button>
                    { showDrop ?
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
                        </ul> : null
                    }
                </div>
                <section className="jumboName">
                    <h1 className="heading">Oscar Wales</h1>
                    <h2 className="subHeading">Full Stack Developer</h2>
                </section>
                <section className="bottomJumbo">
                    <p className="plainText description">I love to build beautiful websites, working with a range of languages including HTML, CSS, SCSS, JavaScript and PHP and working with libraries and frameworks such as React, Redux, jQuery, Laravel and Wordpress.</p>
                </section>
                <a href="#projects"><img className="scrollWhite down bounceDown" src={bottomArrow} alt="downwards pointing arrow"/></a>
            </article>
        </>
    );
};

export default About;