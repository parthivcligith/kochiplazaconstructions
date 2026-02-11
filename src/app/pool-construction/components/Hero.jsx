"use client";

import React from "react";
import styles from "./hero.module.scss";
import ThreeDObject from "../../components/HeroSlider/MainContent/ThreeDObject";
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
                    <h2 className={styles.genre}>{title}</h2>
                    <h4 className={styles.title}>{subtitle}</h4>
                    <p className={styles.subtitle}>{description}</p>

                    <div className={styles.buttonGroup}>
                        <button onClick={scrollToContent}>Build Your Pool</button>
                        <button onClick={scrollToContent}>View Designs</button>
                    </div>
                </div>

                <div className={styles.visualContent}>
                    <div className={styles.imageContainer}>
                        <ThreeDObject
                            src="/assets/images/f1.png"
                            alt="Swimming Pool Construction 3D Model"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
