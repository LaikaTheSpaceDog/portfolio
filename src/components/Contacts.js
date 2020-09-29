import React from 'react';
import github from "../styles/assets/icons/github.svg";
import email from "../styles/assets/icons/envelope-line.svg";
import linkedin from "../styles/assets/icons/linkedin-square.svg";
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";

const Contacts = () => (
    <>
        <article class="contact snap" id="contact">
        <img class="scrollWhite" src={ scrollUp } alt="Scroll up arrow" />
            <section class="contactNav">
                <h1 class="heading">Contact</h1>
                <section class="contactBar">
                    <img class="contactIcon" src={ github } href="https://github.com/LaikaTheSpaceDog" alt="GitHub logo"/>
                    <div class="email">
                        <img class="contactIcon" src={ email } href="oscarjwales@gmail.com" alt="Email icon" />
                        <p class="plainText">oscarjwales@gmail.com</p>
                    </div>
                    <img class="contactIcon" src={ linkedin } href="https://www.linkedin.com/in/oscar-wales/" alt="LinkedIn logo"/>
                </section>
            </section>
        </article>
    </>
);

export default Contacts;