"use client";
import React from "react";
import styles from "./floatingLogo.module.scss";
import TextHover from "../TextHover/TextHover";

export default function FloatingLogo() {
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.floatingLogo}>
            <h4 className={styles.menuOpener}>
                <TextHover text="( Our Services )" />
            </h4>

            <div className={styles.logo}>
                <img src="/assets/images/logo.png" alt="KochiPlaza Logo" className={styles.logoImage} />
            </div>

            <h4 className={styles.contactLink} onClick={scrollToFooter}>
                <TextHover text="( Contact )" />
            </h4>
        </div>
    );
}
