import React from "react";

import "./skills.css"

import Frontend from "./Frontend"
import Backend from "./Backend";
import DeepLearning from "./DeepLearning"


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <DeepLearning />

            </div>
        </section>
    )
}

export default Skills









