import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";
import nerd from "../styles/assets/images/nerd.png";

const Projects = () => (
    <>
        <main className="projects snap" id="projects">
        <img className="scroll" src={ scrollUp } alt="Scroll up arrow" />
            <header className="cardsHeading">
                <h2 className="cardGroupHeading">Projects</h2>
            </header>
            <section className="cardGroup">
            <article className="card">
                <img className="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                <h3 className="cardHeading">(Ping)-Pong</h3>
                <p className="cardText">Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected from the user. UI built using React and Redux for state management.</p>
                <ul className="cardLinks">
                    <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/pong">Repo</a></li>
                    <li className="cardLinkText"><a href="https://laikathespacedog.github.io/pong/#/">Live</a></li>
                </ul>
            </article>
            <article className="card">
                <img className="cardImg" src={ nerd } alt="Landing page of Nerd Words" />
                <h3 className="cardHeading">Nerd Words</h3>
                <p className="cardText">This dictionary app for beginners to programming was built as a group project. I was responsible for the the back end of this group project that I built using Laravel and AWS.</p>
                <ul className="cardLinks">
                    <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/final-project-back-end">Repo</a></li>
                    <li className="cardLinkText"><a href="https://alexanderbraatz.github.io/final-project-front-end/#/words">Live</a></li>
                </ul>
            </article>
            <article className="card">
                <img className="cardImg" src="" alt="" />
                <h3 className="cardHeading">TBC</h3>
                <p className="cardText"></p>
                <ul className="cardLinks">
                    <li className="cardLinkText">Repo</li>
                    <li className="cardLinkText">Live</li>
                </ul>
            </article>
            </section>
            <img className="scroll" src={ scrollDown } alt="Scroll down arrow" /> 
        </main>
    </>
);

export default Projects;