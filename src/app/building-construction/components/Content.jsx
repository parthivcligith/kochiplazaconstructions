"use client";

import { useRef } from "react";
import { projectsContent } from "../content";
import Card from "../../components/Content/Card/Card";
import styles from "./content.module.scss";
import { useScroll } from "framer-motion";

export default function Content() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={container} className={styles.content}>
            {projectsContent.map((project, i) => {
                const targetScale = 1 - (projectsContent.length - i) * 0.05;
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        range={[i * 0.2, 1]}
                        targetScale={targetScale}
                        progress={scrollYProgress}
                    />
                );
            })}
        </div>
    );
}
