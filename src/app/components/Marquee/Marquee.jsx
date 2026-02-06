"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import styles from "./marquee1.module.scss";

// Utility to wrap value within a range
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    // Calculate repetitions to fill screen
    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const calculateRepetitions = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = window.innerWidth;
                const textWidth = textRef.current.offsetWidth;
                const newRepetitions = Math.ceil(containerWidth / textWidth) + 4;
                setRepetitions(newRepetitions);
            }
        };

        calculateRepetitions();
        window.addEventListener("resize", calculateRepetitions);
        return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // This part changes direction based on scroll direction
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={styles.parallax} ref={containerRef}>
            <motion.div className={styles.scroller} style={{ x }}>
                {Array.from({ length: repetitions }).map((_, i) => (
                    <span key={i} ref={i === 0 ? textRef : null}>
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export default function VelocityScroll({ default_velocity = 1, className }) {
    return (
        <section className={styles.scrollSection}>
            <ParallaxText baseVelocity={default_velocity} className={className}>
                KOCHIPLAZA CONSTRUCTIONS &nbsp; RESIDENTIAL &nbsp; COMMERCIAL &nbsp; TURNKEY &nbsp; RENOVATION &nbsp; INTERIOR DESIGN &nbsp;
            </ParallaxText>
            <ParallaxText baseVelocity={-default_velocity} className={className}>
                BEST IN KEPALA &nbsp; PREMIUM QUALITY &nbsp; SUSTAINABLE &nbsp; MODERN DESIGN &nbsp; TRUSTED BUILDERS &nbsp;
            </ParallaxText>
        </section>
    );
}
