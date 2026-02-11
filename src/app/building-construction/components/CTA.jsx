"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={ref} style={{
            position: "relative",
            padding: "150px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "#1a1a1a",
            color: "white",
            overflow: "hidden"
        }}>
            <motion.div style={{ y, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/assets/images/building2.png')", backgroundSize: "cover", opacity: 0.1, pointerEvents: "none" }} />

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "30px", zIndex: 1 }}
            >
                Let’s Build Something That Lasts
            </motion.h2>

            <Link href="/contact-us">
                <Button size="lg" style={{
                    fontSize: "1.2rem",
                    padding: "30px 50px",
                    borderRadius: "50px",
                    zIndex: 1,
                    position: "relative"
                }}>
                    Book a Consultation
                </Button>
            </Link>
        </section>
    );
}
