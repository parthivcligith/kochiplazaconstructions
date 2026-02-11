import React, { useState } from "react";
import Content from "./MainContent/Content";
import content from "../../../content/content.json";
import NextImageSlider from "./NextImageSlider/NextImageSlider";
import styles from "./hero.module.scss";
import Image from "next/image";
import TextHover from "../TextHover/TextHover";
import RadialOrbitalTimeline from "../ui/radial-orbital-timeline";
import { Home, Building as BuildingIcon, Key, Hammer, Palette } from "lucide-react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const nextSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimated(true);
      setIsNext(true);
      setTimeout(() => {
        setIsAnimated(false);
        setIsNext(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
      setIsAnimated(true);
      setIsPrev(true);

      setTimeout(() => {
        setIsAnimated(false);
        setIsPrev(false);
      }, 1000);
    }
  };

  // Map content.json to Timeline Data format
  const timelineData = content.map((item, index) => {
    let Icon = Home;
    if (item.genre.includes("Commercial")) Icon = BuildingIcon;
    if (item.genre.includes("Turnkey")) Icon = Key;
    if (item.genre.includes("Renovation")) Icon = Hammer;
    if (item.genre.includes("Interior")) Icon = Palette;

    return {
      id: index + 1,
      title: item.genre,
      date: `Service ${index + 1}`,
      content: item.shortDescription,
      category: item.title,
      icon: Icon,
      relatedIds: [(index + 2 > content.length ? 1 : index + 2)], // Connect to next
      status: index === currentIndex ? "in-progress" : "completed",
      energy: index === currentIndex ? 100 : 50,
    };
  });

  return (
    <div className={styles.heroSlider}>
      <div className={styles.currentContent}>
        <Content
          content={content}
          currentIndex={currentIndex}
          isPrev={isPrev}
          isNext={isNext}
        />
        <div className={styles.controller}>
          <div className={styles.controllerPrev} onClick={prevSlide}>
            <Image src="/assets/icons/left-arrow.svg" width="25" height="25" alt="Previous" />
            <span>
              <TextHover text="Previous Service" />
            </span>{" "}
          </div>
          <div className={styles.controllerNext} onClick={nextSlide}>
            <span>
              <TextHover text="Next Service" />
            </span>
            <Image src="/assets/icons/right-arrow.svg" width="25" height="25" alt="Next" />
          </div>
        </div>
      </div>
      <div className={styles.nextContent} style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Replaced NextImageSlider with RadialOrbitalTimeline */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <RadialOrbitalTimeline
            timelineData={timelineData}
            activeIndex={currentIndex}
            onNodeSelect={(index) => {
              if (index !== null && index !== currentIndex && !isAnimated) {
                setCurrentIndex(index);
              }
            }}
          />
        </div>
        <NextImageSlider
          content={content}
          currentIndex={currentIndex}
          isPrev={isPrev}
          isNext={isNext}
        />
      </div>
    </div>
  );
}
