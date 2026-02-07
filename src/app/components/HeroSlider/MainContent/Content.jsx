"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./content.module.scss";
import { motion } from "framer-motion";
import ThreeDObject from "./ThreeDObject";

export default function NextImageSlider({
  content,
  currentIndex,
  isPrev,
  isNext,
}) {
  const newCurrentIndex = (currentIndex - 1 + content.length) % content.length;
  useEffect(() => {
    const tlNext = gsap.timeline({});
    const tlPrev = gsap.timeline({});
    const tlCurrent = gsap.timeline({});
    const tlGenre = gsap.timeline({});
    const tlTitle = gsap.timeline({});
    const tlDescription = gsap.timeline({});

    tlGenre.fromTo(
      `.${styles.genre}`,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0 },
      0.5
    );
    tlTitle.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0 },
      0.5
    );

    tlDescription.fromTo(
      `.${styles.description}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      0.25
    );

    if (isPrev) {
      gsap.set(`.${styles.prev}`, { zIndex: 1 });
      gsap.set(`.${styles.next}`, { zIndex: 2 });
    }
    if (isNext) {
      gsap.set(`.${styles.prev}`, { zIndex: 2 });
      gsap.set(`.${styles.next}`, { zIndex: 1 });
    }

    tlNext
      .set(`.${styles.next}`, { autoAlpha: 1, x: 0 })
      .to(`.${styles.next}`, { x: "100%", scale: 1 }, 0)
      .set(`.${styles.next}`, { autoAlpha: 0 }, 1);

    tlPrev
      .set(`.${styles.prev}`, { autoAlpha: 1, x: 0 })
      .to(`.${styles.prev}`, { x: "-110%", scale: 1.2 }, 0)
      .set(`.${styles.prev}`, { autoAlpha: 0 }, 1);

    tlCurrent
      .set(`.${styles.current}`, { opacity: 1, zIndex: 2, scale: 1.2 })
      .to(`.${styles.current}`, { scale: 1, x: 0 }, 0);

    const timeline = gsap.timeline({
      delay: 0,
    });
    if (isPrev) {
      console.log("prev");
      timeline
        .add(tlCurrent, 0)
        .add(tlPrev, 0)
        .add(tlNext, 0)
        .add(tlDescription, 0)
        .add(tlGenre, 0.2);
    } else if (isNext) {
      timeline
        .add(tlCurrent, 0.2)
        .add(tlPrev, 0.2)
        .add(tlNext, 0.2)
        .add(tlDescription, 0)
        .add(tlGenre, 0.2);
    }
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={`${styles.currentImageSlider} ${content[newCurrentIndex].src.includes("creation_2344042398.png") ? styles.overflowVisible : ''}`}>
        {content.map((item, index) => {
          const isCurrent = index === newCurrentIndex;
          const isNext = index === (newCurrentIndex + 1) % content.length;
          const isPrev =
            index === (newCurrentIndex - 1 + content.length) % content.length;

          return (
            <div
              key={index}
              className={`${styles.currentImageContainer} ${isCurrent
                ? styles.current
                : isNext
                  ? `${styles.next} `
                  : isPrev
                    ? `${styles.prev} `
                    : ""
                }`}
            >
              {item.src.includes("creation_2344042398.png") ? (
                <ThreeDObject
                  src={item.src}
                  alt={`${item.title} - ${item.genre} by KochiPlaza Constructions in Kochi, Kerala`}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${item.title} - ${item.genre} by KochiPlaza Constructions in Kochi, Kerala`}
                  className={styles.currentImage}
                  title={`${item.title} - Best Construction Company in Kerala`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.infos}>
        <h2 className={styles.genre}>{content[newCurrentIndex].genre}</h2>
        <h4 className={styles.title}>{content[newCurrentIndex].title}</h4>
        <p className={styles.description}>
          {content[newCurrentIndex].shortDescription}
        </p>
        <button className={styles.walkthroughButton} onClick={() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const duration = 15000; // 15 seconds to scroll down
          const startTime = performance.now();

          function scrollDown(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease in-out
            const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, ease * totalHeight);

            if (progress < 1) {
              requestAnimationFrame(scrollDown);
            }
          }
          requestAnimationFrame(scrollDown);
        }}>
          See Walkthrough
        </button>
      </div>
    </div>
  );
}
