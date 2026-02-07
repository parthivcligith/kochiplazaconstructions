"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import styles from "./threedobject.module.scss";

export default function ThreeDObject({ src, alt }) {
    const containerRef = useRef(null);

    // 1. Scroll Detection Setup
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end -100vh"], // Track until hero is well off-screen (extensions allow slower return)
    });

    // Smooth spring physics for scroll - "Floaty Smooth" tuning
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.2,
        stiffness: 120, // Softer spring for gentler response
        damping: 30,
        restDelta: 0.001,
    });

    // 2. Scroll-to-Y Position Mapping & Parallax
    // Choreography: 
    // 0 -> 0.3: Delayed start
    // 0.3 -> 0.4: Quick reach to max depth
    // 0.4 -> 1.0: Ultra-long smooth return (60% of duration)
    const toothY = useTransform(smoothProgress, [0, 0.3, 0.4, 1], [0, 100, 1500, 0]);
    // Scale growth during descent
    const toothScaleScroll = useTransform(smoothProgress, [0, 1], [1, 1.2]);

    // Optional: Pedestal moves slower for depth
    const pedestalY = useTransform(smoothProgress, [0, 1], [0, 300]);
    const pedestalOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0]);

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Pedestal / Shadow - Independent Layer */}
            <motion.div
                className={styles.pedestalWrapper}
                style={{ y: pedestalY, opacity: pedestalOpacity }}
            >
                <div className={styles.pedestalShadow} />
                <div className={styles.pedestalBase}>
                    <div className={styles.baseLayer1} />
                    <div className={styles.baseLayer2} />
                </div>
            </motion.div>

            {/* Main Tooth Animation Stack */}
            {/* Layer 1: Scroll Physics (Y Movement + Scale) - No Shake */}
            <motion.div
                className={styles.scrollWrapper}
                style={{
                    y: toothY,
                    scale: toothScaleScroll,
                }}
            >
                {/* Layer 2: Pop-Out Burst (Initial Entry) */}
                <motion.div
                    className={styles.popWrapper}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: -150,
                        rotate: -5 // From top (-150) to center (0)
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1.5, // Burst size
                        y: 0,
                        rotate: 0
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 120,
                        damping: 15
                    }}
                >
                    {/* Layer 3: Continuous Floating (Additive) */}
                    <motion.img
                        src={src}
                        alt={alt}
                        className={styles.image}
                        animate={{
                            y: [0, -15, 0] // Floating bob
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Glow Overlay - Pops with tooth */}
                    <motion.div
                        className={styles.glowOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }}
                    >
                        <div className={styles.glow1} />
                        <div className={styles.glow2} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
