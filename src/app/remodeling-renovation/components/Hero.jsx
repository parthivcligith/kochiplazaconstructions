"use client";

import React from "react";
import styles from "./hero.module.scss";
import { heroContent } from "../content";

export default function Hero() {
    const { title, genre, subtitle, description, video } = heroContent;

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
                        <button onClick={scrollToContent}>Start Renovation</button>
                        <button onClick={scrollToContent}>View Gallery</button>
                    </div>
                </div>

                <div className={styles.visualContent}>
                    <div className={styles.imageContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Video Element */}
                        <video
                            width="100%"
                            height="auto"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            }}
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}
