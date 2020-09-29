import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";
import nerd from "../styles/assets/images/nerd.png";

const Projects = () => (
    <>
        <main class="projects snap" id="projects">
        <img class="scroll" src={ scrollUp } alt="Scroll up arrow" />
            <heading class="cardsHeading">
                <h2 class="cardGroupHeading">Projects</h2>
            </heading>
            <section class="cardGroup">
            <article class="card">
                <img class="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                <h3 class="cardHeading">(Ping)-Pong</h3>
                <p class="cardText">Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected from the user. UI built using React and Redux for state management.</p>
                <ul class="cardLinks">
                    <li class="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/pong">Repo</a></li>
                    <li class="cardLinkText"><a href="https://laikathespacedog.github.io/pong/#/">Live</a></li>
                </ul>
            </article>
            <article class="card">
                <img class="cardImg" src={ nerd } alt="Landing page of Nerd Words" />
                <h3 class="cardHeading">Nerd Words</h3>
                <p class="cardText">This dictionary app for beginners to programming was built as a group project. I was responsible for the the back end of this group project that I built using Laravel and AWS.</p>
                <ul class="cardLinks">
                    <li class="cardLinkText"><a href="https://github.com/LaikaTheSpaceDog/final-project-back-end">Repo</a></li>
                    <li class="cardLinkText"><a href="https://alexanderbraatz.github.io/final-project-front-end/#/words">Live</a></li>
                </ul>
            </article>
            <article class="card">
                <img class="cardImg" src="" alt="" />
                <h3 class="cardHeading">TBC</h3>
                <p class="cardText"></p>
                <ul class="cardLinks">
                    <li class="cardLinkText"><a>Repo</a></li>
                    <li class="cardLinkText"><a>Live</a></li>
                </ul>
            </article>
            </section>
            <img class="scroll" src={ scrollDown } alt="Scroll down arrow" /> 
        </main>
    </>
);

export default Projects;