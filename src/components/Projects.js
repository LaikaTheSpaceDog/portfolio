import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";
import food from "../styles/assets/images/food.png";
import pet from "../styles/assets/images/pet.png";

const Projects = () => (
    <>
        <main className="projects snapWide" id="projects">
        <a href="#about"><img className="scroll up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
            <header className="cardsHeading">
                <h2 className="cardGroupHeading">Projects</h2>
            </header>
            <section className="cardGroup">
                <section className="cardSnap snap800" id="proj1">
                    <a href="#about"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 1</h2>
                    </header>
                    <article className="card">
                        <img className="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                        <h3 className="cardHeading">(Ping)-Pong</h3>
                        <p className="cardText">Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected from the user. UI built using React and Redux for state management.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/pong" target="_blank">Repo</a></li>
                            <li className="cardLinkText"><a href="https://laikathespacedog.github.io/pong/#/" target="_blank">Live</a></li>
                        </ul>
                    </article>
                    <a href="#proj2"><img className="scrollSnap down bounceDown" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj2">
                    <a href="#proj1"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 2</h2>
                    </header>
                    <article className="card">
                        <img className="cardImg" src={ food } alt="Landing page of Food Atlas" />
                        <h3 className="cardHeading">Food Atlas</h3>
                        <p className="cardText">Mini web app built with React that combines three of my greatest loves: travel, geography and food! This app allows you to explore the national dish of each country through an interactive world map.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/food-atlas" target="_blank">Repo</a></li>
                            <li className="cardLinkText"><a href="https://laikathespacedog.github.io/food-atlas/#" target="_blank">Live</a></li>
                        </ul>
                    </article>
                    <a href="#proj3"><img className="scrollSnap down bounceDown" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj3">
                    <a href="#proj2"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <header className="cardsSnapHeading">
                        <h2 className="cardGroupSnapHeading">Project 3</h2>
                    </header>
                    <article className="card">
                        <img className="cardImg" src={ pet } alt="Home page of pet database" />
                        <h3 className="cardHeading">Pet Database</h3>
                        <p className="cardText">I built this pet database during weeks 7 and 8 of the Develop Me Bootcamp using Laravel. This app has a RESTful API and a UI built with blade and basic Bootstrap styling.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/laravel_project_vet" target="_blank">Repo</a></li>
                        </ul>
                    </article>
                    <a href="#contact"><img className="scrollSnap down bounceDown" src={ scrollDown } alt="Scroll down arrow" /></a>
                </section>
            </section>
            <a href="#contact"><img className="scroll down bounceDown" src={ scrollDown } alt="Scroll down arrow" /></a>
        </main>
    </>
);

export default Projects;