import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./description.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Description() {
  const descriptionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: descriptionRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

  const description = `KochiPlaza Constructions is a trusted construction company in Kochi, Ernakulam, serving clients across all districts of Kerala.
    With two physical locations in Kochi and a team of experienced builders in Ernakulam, we offer comprehensive construction services including residential construction, commercial buildings, turnkey projects, renovation services, and interior design.
    From Kasaragod to Thiruvananthapuram, we deliver quality construction with superior craftsmanship. Scroll to explore our services!`;
  const descriptionSplit = description.split("");

  useLayoutEffect(() => {
    const descriptionTextSpans = document.querySelectorAll(
      `.${styles.descriptionText} span`
    );

    gsap.to(descriptionTextSpans, {
      opacity: 1,
      fontWeight: 900,
      color: "#000000",
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top top", // Adjust the start position as needed
        end: "65% bottom", // Adjust the end position as needed
        scrub: true, // Smooth scrolling effect
      },
    });
  }, [descriptionSplit]);

  return (
    <>
      <div ref={descriptionRef} className={styles.descriptionContainer}>
        <div className={styles.description}>
          <h1>Best Construction Company in Kochi, Ernakulam, Kerala</h1>
          <p className={styles.descriptionText}>
            {descriptionSplit.map((child, index) => (
              <span key={index}>{child}</span>
            ))}
          </p>
        </div>
        <div className={styles.illustrations}>
          <div className={styles.images}>
            <div className={styles.imageContainer}>
              <img src="/assets/images/house3.png" alt="Residential construction project in Kochi by KochiPlaza Constructions" title="House Construction in Kerala" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/assets/images/building1.png" alt="Renovation services in Ernakulam by KochiPlaza Constructions" title="Renovation Services Kerala" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/assets/images/plan1.png" alt="Interior design project in Kochi by KochiPlaza Constructions" title="Interior Design Services Kerala" />
            </div>
          </div>
          {/* <div ref={imageFull} className={styles.imageFullContainer}>
            <img src="/assets/images/high-tech.jpeg" alt="illustration-3" />
          </div> */}
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </>
  );
}
