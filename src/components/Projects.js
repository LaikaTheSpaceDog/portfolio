import React from 'react';
import scrollUp from "../styles/assets/icons/double-arrow-top.svg";
import scrollDown from "../styles/assets/icons/double-arrow-bottom.svg";
import pingPong from "../styles/assets/images/pong.png";

const Projects = () => (
    <>
        <main class="projects">
            <img class="scroll" src={ scrollUp } alt="Scroll up arrow" />
            <h2 class="cardGroupHeading">Projects</h2>
            <section class="cardGroup">
            <article class="card">
                <img class="cardImg" src={ pingPong } alt="Landing page of pong-themed ping-pong tournament app" />
                <h3 class="cardHeading">Project 1</h3>
                <p class="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tenetur, repellat itaque eligendi mollitia modi natus voluptate similique beatae quod debitis est aspernatur quas distinctio aliquid, magnam quia. Fugiat?</p>
            </article>
            <article class="card">
                <img class="cardImg" src="" alt="" />
                <h3 class="cardHeading">Project 1</h3>
                <p class="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tenetur, repellat itaque eligendi mollitia modi natus voluptate similique beatae quod debitis est aspernatur quas distinctio aliquid, magnam quia. Fugiat?</p>
            </article>
            <article class="card">
                <img class="cardImg" src="" alt="" />
                <h3 class="cardHeading">Project 1</h3>
                <p class="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tenetur, repellat itaque eligendi mollitia modi natus voluptate similique beatae quod debitis est aspernatur quas distinctio aliquid, magnam quia. Fugiat?</p>
            </article>
            </section>
            <img class="scroll" src={ scrollDown } alt="Scroll down arrow" /> 
        </main>
    </>
);

export default Projects;