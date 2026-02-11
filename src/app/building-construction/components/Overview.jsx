"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./overview.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const content = {
    heading: "Building Construction Overview",
    text: "We specialize in delivering high-quality residential and commercial buildings that stand the test of time. From structural planning to compliance and safety standards, our scalable construction solutions ensure every project meets the highest benchmarks of engineering and design. We build with precision, integrity, and a commitment to excellence.",
    images: [
        { src: "/assets/images/house1.jpg", alt: "Residential Building" },
        { src: "/assets/images/house2.jpg", alt: "Commercial Complex" },
        { src: "/assets/images/house3.png", alt: "Structural Engineering" }
    ]
};

export default function Overview() {
    const descriptionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ["start end", "end start"],
    });
    const height = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

    const { heading, text, images } = content;
    // Split text by words for a slightly different/cleaner effect or char by char as consistent with homepage
    const descriptionSplit = text.split("");

    useLayoutEffect(() => {
        const descriptionTextSpans = document.querySelectorAll(
            `.${styles.descriptionText} span`
        );

        gsap.to(descriptionTextSpans, {
            opacity: 1,
            fontWeight: 900,
            color: "#000000",
            duration: 1,
            stagger: 0.02, // Faster stagger for longer text
            scrollTrigger: {
                trigger: descriptionRef.current,
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
            },
        });
    }, []);

    return (
        <>
            <div ref={descriptionRef} className={styles.descriptionContainer} id="expertise">
                <div className={styles.description}>
                    <h2>{heading}</h2>
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
