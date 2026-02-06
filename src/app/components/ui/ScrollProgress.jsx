"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import styles from "./scrollProgress.module.scss";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [percentage, setPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Round to nearest integer
        const p = Math.round(latest * 100);
        setPercentage(p);

        // Show only after scrolling a bit or always? User asked simply "add a % progress bar"
        // Usually cleaner if always visible or fades in.
        if (latest > 0.01) {
            setIsVisible(true);
        } else {
            setIsVisible(false); // Hide at very top if desired, or keep visible.
            // Let's keep it visible but maybe 0% doesn't need to be shouted.
            // Actually, let's keep it visible if the user asked for it.
            // The SCSS controls opacity via class. I'll pass a class.
        }
    });

    // Use effective viewport height for creating a vertical fill
    return (
        <>
            <div className={styles.progressBar}>
                <motion.div
                    className={styles.progressFill}
                    style={{ scaleY }}
                />
            </div>
            <div className={`${styles.progressText} ${percentage > 0 ? styles.visible : ''}`}>
                {percentage}%
            </div>
        </>
    );
}
