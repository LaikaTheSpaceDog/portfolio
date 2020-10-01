import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";
import nerd from "../styles/assets/images/nerd.png";
import pet from "../styles/assets/images/pet.png";

const Projects = () => (
    <>
        <main className="projects snapWide" id="projects">
        <a href="#about"><img className="scroll up" src={ scrollUp } alt="Scroll up arrow" /></a>
            <header className="cardsHeading">
                <h2 className="cardGroupHeading">Projects</h2>
            </header>
            <section className="cardGroup">
                <section className="cardSnap snap800" id="proj1">
                    <a href="#about"><img className="scrollSnap up" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 1</h2>
                    </header>
                    <article className="card">
                        <div className="mobLandDiv1">
                            <img className="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                        </div>
                        <div className="mobLandDiv2">
                            <h3 className="cardHeading">(Ping)-Pong</h3>
                            <p className="cardText">Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected from the user. UI built using React and Redux for state management.</p>
                            <ul className="cardLinks">
                                <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/pong">Repo</a></li>
                                <li className="cardLinkText"><a href="https://laikathespacedog.github.io/pong/#/">Live</a></li>
                            </ul>
                        </div>
                    </article>
                    <a href="#proj2"><img className="scrollSnap down" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj2">
                    <a href="#proj1"><img className="scrollSnap up" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 2</h2>
                    </header>
                    <article className="card">
                        <img className="cardImg" src={ nerd } alt="Landing page of Nerd Words" />
                        <h3 className="cardHeading">Nerd Words</h3>
                        <p className="cardText">This dictionary app for beginners to programming was built as a group project. I was responsible for the the back end of this group project that I built using Laravel and AWS.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/final-project-back-end">Repo</a></li>
                            <li className="cardLinkText"><a href="https://alexanderbraatz.github.io/final-project-front-end/#/words">Live</a></li>
                        </ul>
                    </article>
                    <a href="#proj3"><img className="scrollSnap down" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj3">
                    <a href="#proj2"><img className="scrollSnap up" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 3</h2>
                    </header>
                    <article className="card">
                        <img className="cardImg" src={ pet } alt="Home page of pet database" />
                        <h3 className="cardHeading">Pet Database</h3>
                        <p className="cardText">I built this pet database during weeks 7 and 8 of the Develop Me Bootcamp using Laravel. This app has a RESTful API and a UI built with blade and basic Bootstrap styling.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/laravel_project_vet">Repo</a></li>
                        </ul>
                    </article>
                    <a href="#contact"><img className="scrollSnap down" src={ scrollDown } alt="Scroll down arrow" /></a>
                </section>
            </section>
            <a href="#contact"><img className="scroll down" src={ scrollDown } alt="Scroll down arrow" /></a>
        </main>
    </>
);

export default Projects;