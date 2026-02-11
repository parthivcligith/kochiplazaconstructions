"use client";

import React from "react";
import styles from "./hero.module.scss";
import ThreeDObject from "../../components/HeroSlider/MainContent/ThreeDObject";
import { highlightColor } from "../../variables.scss"; // Check if this import works, otherwise generic color
import { heroContent } from "../content";

export default function Hero() {
    const { title, genre, subtitle, description } = heroContent;

    const scrollToContent = () => {
        const totalHeight = window.innerHeight;
        window.scrollTo({ top: totalHeight, behavior: 'smooth' });
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.textContent}>
                    <h2 className={styles.genre}>{heroContent.title}</h2>
                    <h4 className={styles.title}>{heroContent.subtitle}</h4>
                    <p className={styles.subtitle}>{heroContent.description}</p>

                    <div className={styles.buttonGroup}>
                        <button onClick={scrollToContent}>Start Your Project</button>
                        <button onClick={scrollToContent}>View Our Process</button>
                    </div>
                </div>

                <div className={styles.visualContent}>
                    <div className={styles.imageContainer}>
                        {/* Reusing ThreeDObject for that specific parallax/floating feel. 
                 Using existing asset since the prompt asks for placeholder but 'SAME behavior'. 
                 The ThreeDObject component handles the animation logic. */}
                        <ThreeDObject
                            src="/assets/images/creation_2344042398.png"
                            alt="House Construction 3D Model"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
