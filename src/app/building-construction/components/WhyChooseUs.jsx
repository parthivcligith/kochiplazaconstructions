"use client";
import { useRef } from "react";
import Card from "@/app/components/Content/Card/Card";
import styles from "@/app/components/Content/content.module.scss";
import { useScroll } from "framer-motion";

const reasons = [
    {
        title: "Structural Integrity",
        genre: "Our Promise",
        longDescription: "We don't just build structures; we build trust. Our rigid adherence to safety standards and structural engineering principles ensures your building stands strong for generations. We use premium grade steel and cement, tested for durability and resilience.",
        src: "/assets/images/building2.png",
        color: "#BBACAF"
    },
    {
        title: "Modern Techniques",
        genre: "Innovation",
        longDescription: "Leveraging the latest in construction technology, from BIM modeling to advanced formwork systems. We reduce waste, optimize timelines, and deliver precision that traditional methods can't match.",
        src: "/assets/images/house1.jpg",
        color: "#977F6D"
    },
    {
        title: "Expertise",
        genre: "High & Low Rise",
        longDescription: "Whether it's a cozy villa or a sprawling commercial complex, our team has the verified expertise to handle projects of any scale. We understand the unique zoning and structural requirements for different building types in Kerala.",
        src: "/assets/images/house2.jpg",
        color: "#C2491D"
    },
    {
        title: "On-Time Delivery",
        genre: "Reliability",
        longDescription: "We respect your time. Our project management systems track every milestone, ensuring we hand over the keys exactly when promised. No excuses, just results.",
        src: "/assets/images/house3.png",
        color: "#B62429"
    },
    {
        title: "Transparent Management",
        genre: "Trust",
        longDescription: "No hidden costs. No surprises. We provide regular updates, photographic evidence of progress, and transparent billing so you are always in the loop regarding your project's status.",
        src: "/assets/images/plan1.png",
        color: "#88A28D"
    }
];

export default function WhyChooseUs() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={container} className={styles.content}>
            <div style={{ position: 'sticky', top: '10vh', textAlign: 'center', marginBottom: '50px', zIndex: 0 }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Why Choose Us</h2>
            </div>
            {reasons.map((project, i) => {
                const targetScale = 1 - (reasons.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                        progress={scrollYProgress}
                    />
                );
            })}
        </div>
    );
}
