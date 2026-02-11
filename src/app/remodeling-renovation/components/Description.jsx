"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./description.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import { descriptionContent } from "../content";

gsap.registerPlugin(ScrollTrigger);

export default function Description() {
    const descriptionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ["start end", "end start"],
    });
    const height = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

    const { heading, text, images } = descriptionContent;
    const descriptionSplit = text.split("");

    useLayoutEffect(() => {
        if (!descriptionRef.current) return;
        const descriptionTextSpans = descriptionRef.current.querySelectorAll(
            `.${styles.descriptionText} span`
        );

        const ctx = gsap.context(() => {
            gsap.to(descriptionTextSpans, {
                opacity: 1,
                fontWeight: 900,
                color: "#000000",
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top top",
                    end: "65% bottom",
                    scrub: true,
                },
            });
        }, descriptionRef);

        return () => ctx.revert();
    }, [descriptionSplit]);

    return (
        <>
            <div ref={descriptionRef} className={styles.descriptionContainer}>
                <div className={styles.description}>
                    <h1>{heading}</h1>
                    <p className={styles.descriptionText}>
                        {descriptionSplit.map((child, index) => (
                            <span key={index}>{child}</span>
                        ))}
                    </p>
                </div>
                <div className={styles.illustrations}>
                    <div className={styles.images}>
                        {images.map((img, i) => (
                            <div key={i} className={styles.imageContainer}>
                                <img src={img.src} alt={img.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </>
    );
}
