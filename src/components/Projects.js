import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";
import food from "../styles/assets/images/food.png";
import zoe from "../styles/assets/images/zoe.png";

const Projects = () => (
    <>
        <main className="projects snapWide" id="projects">
            <a href="#about"><img className="scroll up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
            <header className="cardsHeading">
                <h2 className="cardGroupHeading">Projects</h2>
            </header>
            <section className="cardGroup section__constrained">
                <section className="cardSnap snap800" id="proj1">
                    <a href="#about"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <article className="card">
                        <div className="cardImgContainer">
                            <img className="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                        </div>
                        <h3 className="cardHeading">(Ping)-Pong</h3>
                        <p className="cardText">Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected by the user. UI built using React with Redux for state management.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/pong" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            <li className="cardLinkText"><a href="https://laikathespacedog.github.io/pong/#/" target="_blank" rel="noopener noreferrer">Live</a></li>
                        </ul>
                    </article>
                    <a href="#proj2"><img className="scrollSnap down bounceDown" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj2">
                    <a href="#proj1"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <article className="card">
                        <div className="cardImgContainer">
                            <img className="cardImg" src={ food } alt="Landing page of Food Atlas" />
                        </div>
                        <h3 className="cardHeading">Food Atlas</h3>
                        <p className="cardText">Web app built with React and Laravel that combines three of my greatest loves: travel, geography and food! Explore the national dish of each country through an interactive world map and make your own list of favourite dishes.</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/food-atlas" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            <li className="cardLinkText"><a href="https://laikathespacedog.github.io/food-atlas/#" target="_blank" rel="noopener noreferrer">Live</a></li>
                        </ul>
                    </article>
                    <a href="#proj3"><img className="scrollSnap down bounceDown" src={ scrollDown } alt="Scroll down arrow" /> </a>
                </section>
                <section className="cardSnap snap800" id="proj3">
                    <a href="#proj2"><img className="scrollSnap up bounceUp" src={ scrollUp } alt="Scroll up arrow" /></a>
                    <article className="card">
                        <div className="cardImgContainer">
                            <img className="cardImg" src={ zoe } alt="Home page of pet database" />
                        </div>
                        <h3 className="cardHeading">Zoe Weldon Productions</h3>
                        <p className="cardText">A Wordpress site built with a minimalist custom theme for an independent theatre company based in London. Live site coming soon!</p>
                        <ul className="cardLinks">
                            <li className="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/weldon-productions" target="_blank" rel="noopener noreferrer">Repo</a></li>
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