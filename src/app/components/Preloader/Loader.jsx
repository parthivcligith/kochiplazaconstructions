"use client";

import styles from "./loader.module.scss";
import Image from "next/image";
import { imageDown } from "./anim";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  "/assets/images/blobism.jpg",
  "/assets/images/brutalism.jpg",
  "/assets/images/high-tech.jpeg",
  "/assets/images/o2n.jpg",
  "/assets/images/int.png",
];

export default function Loader() {
  const imageRefs = useRef([]);
  const imageContainer = useRef();
  const container = useRef();
  const h1 = useRef();

  useLayoutEffect(() => {
    // Split text into words and characters for more control
    const text = "KochiPlaza Constructions";
    const words = text.split(" ");

    // Create spans for each word and character with 3D perspective
    if (h1.current) {
      h1.current.innerHTML = words
        .map((word, wordIndex) => {
          const chars = word.split("");
          return `<span class="word" style="display: inline-block; perspective: 1000px;">
            ${chars
              .map((char) => {
                return `<span class="char" style="display: inline-block; opacity: 0; transform: rotateX(-90deg) translateY(50px) scale(0.5);">${char}</span>`;
              })
              .join("")}
          </span>${wordIndex < words.length - 1 ? '<span style="display: inline-block; width: 0.3em;"></span>' : ''}`;
        })
        .join("");
    }

    const chars = h1.current.querySelectorAll(".char");

    // Create master timeline for text animations
    const masterTimeline = gsap.timeline();

    // Phase 1: Dramatic 3D character reveal
    masterTimeline.to(chars, {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      stagger: {
        each: 0.08,
        from: "start",
      },
      duration: 1.2,
      ease: "power4.out",
    });

    // Phase 2: Pulse effect from center
    masterTimeline.to(
      chars,
      {
        scale: 1.15,
        stagger: {
          each: 0.03,
          from: "center",
          yoyo: true,
          repeat: 1,
        },
        duration: 0.3,
        ease: "power2.inOut",
      },
      "+=0.3"
    );

    // Phase 3: Wave effect
    masterTimeline.to(
      chars,
      {
        y: -20,
        stagger: {
          each: 0.05,
          from: "start",
          yoyo: true,
          repeat: 1,
        },
        duration: 0.4,
        ease: "sine.inOut",
      },
      "+=0.2"
    );

    // Phase 4: Glow and scale effect
    masterTimeline.to(
      h1.current,
      {
        textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5)",
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "+=0.1"
    );

    // Phase 5: Remove glow
    masterTimeline.to(
      h1.current,
      {
        textShadow: "0 0 0px rgba(255,255,255,0)",
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "+=0.2"
    );

    const timelineLoading = gsap.timeline({
      defaults: { delay: 0, ease: "power3.inOut" },
    });

    timelineLoading.to(imageRefs.current[0], {
      top: "50vh",
      transform: "translateY(-50%)",
    });
    timelineLoading.to(
      imageRefs.current[1],
      { top: "50vh", transform: "translateY(-50%)" },
      0.25
    );
    timelineLoading.to(
      imageRefs.current[2],
      { top: "50vh", transform: "translateY(-50%)" },
      0.5
    );
    timelineLoading.to(
      imageRefs.current[3],
      { top: "50vh", transform: "translateY(-50%)" },
      0.75
    );
    timelineLoading.to(
      imageRefs.current[4],
      { top: "50vh", transform: "translateY(-50%)" },
      1
    );
    timelineLoading.to(
      imageRefs.current,
      {
        top: "30vh",
        transform: "rotate(-20deg)",
      },
      1.5
    );
    timelineLoading.to(
      imageContainer.current,
      { x: "150%", duration: 1, ease: "power3.inOut" },
      1.8
    );
    timelineLoading.to(
      h1.current,
      {
        opacity: 0,
      },
      2.6
    );
    gsap.to(
      container.current,
      {
        maskImage:
          " radial-gradient(circle,transparent 0%,transparent 100%,black 100%)",
        ease: "power3.inOut",
      },
      3
    );
  });

  return (
    <div className={styles.loader} ref={container}>
      <h1 ref={h1} style={{ transformStyle: "preserve-3d", textAlign: "center", margin: "0 auto" }}></h1>
      <div className={styles.imageContainer} ref={imageContainer}>
        {images.map((image, index) => (
          <Image
            src={image}
            className={styles.image}
            width={200}
            height={300}
            objectFit="cover"
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}
