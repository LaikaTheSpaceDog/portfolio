import React from 'react';
import github from "../styles/assets/icons/github.svg";
import email from "../styles/assets/icons/envelope-line.svg";
import linkedin from "../styles/assets/icons/linkedin-square.svg";
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import Footer from "./Footer";

const Contacts = () => (
    <>
        <article className="contact snap" id="contact">
        <a href="#projects"><img className="scrollWhite up projs" src={ scrollUp } alt="Scroll up arrow" /></a>
        <a href="#proj3"><img className="scrollWhite up proj3" src={ scrollUp } alt="Scroll up arrow" /></a>
            <section className="contactNav">
                <h1 className="heading">Contact</h1>
                <section className="contactBar">
                    <a href="https://github.com/LaikaTheSpaceDog" target="_blank" rel="noopener noreferrer"><img className="contactIcon" src={ github } alt="GitHub logo"/></a>
                    <div className="email">
                        <a href="mailto:oscarjwales@gmail.com" target="_blank" rel="noopener noreferrer"><img className="contactIcon" src={ email } alt="Email icon" /></a>
                        <p className="plainText">oscarjwales@gmail.com</p>
                    </div>
                    <a href="https://www.linkedin.com/in/oscar-wales/" target="_blank" rel="noopener noreferrer"><img className="contactIcon" src={ linkedin } alt="LinkedIn logo"/></a>
                </section>
            </section>
            <Footer />
        </article>
    </>
);

export default Contacts;