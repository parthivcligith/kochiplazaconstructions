"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./process.module.scss";

const steps = [
    {
        id: "01",
        title: "Planning & Approvals",
        description: "We handle the bureaucracy so you don't have to. From initial blueprints to municipal sanctions and environmental clearances, we ensure every document is in place before ground is broken.",
        image: "/assets/images/plan1.png"
    },
    {
        id: "02",
        title: "Structural Engineering",
        description: "The backbone of your building. Our engineers design robust frameworks that account for soil conditions, load-bearing requirements, and seismic zones, ensuring unmatched stability.",
        image: "/assets/images/building1.png"
    },
    {
        id: "03",
        title: "Core Construction",
        description: "Watch your vision take shape. We execute the grey structure with precision—foundation, columns, beams, and slabs—using high-grade concrete and steel, strictly adhering to the approved design.",
        image: "/assets/images/house3.png"
    },
    {
        id: "04",
        title: "Finishing & Quality",
        description: "The details define the luxury. Plastering, flooring, painting, and fixtures are installed with an artisan's touch. Our rigorous quality control checks ensure a flawless handover.",
        image: "/assets/images/int.png"
    }
];

export default function Process() {
    return (
        <div className={styles.processContainer}>
            <div className={styles.header}>
                <h2>Our Construction Process</h2>
                <p>A systematic approach to building excellence.</p>
            </div>

            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <ProcessStep key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    );
}

function ProcessStep({ step, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className={`${styles.step} ${index % 2 !== 0 ? styles.reversed : ''}`}
        >
            <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
            <div className={styles.stepImage}>
                <img src={step.image} alt={step.title} />
            </div>
        </motion.div>
    );
}
