import { useEffect, useRef } from "react";
import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "../../../content/content.json";
import TextHover from "../TextHover/TextHover";
import gsap from "gsap";

const calculateHeights = (scrollYProgress, numColumns) => {
  return [...Array(numColumns)].map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [`${100 + index * 25}vh`, "0vh"])
  );
};

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const numColumns = 10;

  const heights = calculateHeights(scrollYProgress, numColumns);

  if (process.browser) {
    window.addEventListener("scroll", () => {
      console.log(scrollYProgress.current);

      if (scrollYProgress.current > 0.95) {
        gsap.set(`.${styles.footerColumnContainer} `, { zIndex: 1 });
      } else if (scrollYProgress.current < 0.95) {
        gsap.set(`.${styles.footerColumnContainer} `, { zIndex: 3 });
      }
    });
  }
  return (
    <div ref={container} className={styles.footerContainer} id="footer">
      <div className={styles.footer}>
        <div className={styles.credits}>
          {content.map((item, index) => {
            return (
              <div className={styles.credit} key={index}>
                <div className={styles.imgContainer}>
                  <img src={item.src} alt={`${item.title} by KochiPlaza Constructions`} title={`${item.genre} in Kochi, Kerala`} />
                </div>
                <p>{item.title} - {item.genre}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.presentation}>
          <h2>KochiPlaza Constructions</h2>
          <h3>Trusted Construction Company in Kochi & Kerala</h3>

          <div className={styles.contactInfo}>
            <h4>Primary Office:</h4>
            <p>4756+4P5 Constructions, NH66, Kavilnada, Koonammavu</p>
            <p>Kochi, Kerala 683518</p>

            <h4>Branch Office:</h4>
            <p>Near Zudio, Vallathol Padi, Vidhya Nagar Colony</p>
            <p>Thrikkakara, Edappilly, Kochi, Kerala 682037</p>

            <h4>Contact:</h4>
            <p><a href="tel:+919895169005" style={{ color: 'inherit', textDecoration: 'none' }}>📞 98951 69005</a></p>

            <h4>Business Hours:</h4>
            <p>Monday - Saturday: 9:00 AM - 5:30 PM</p>

            <h4>Serving All Kerala Districts:</h4>
            <p>Kasaragod, Kannur, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Ernakulam, Idukki, Kottayam, Alappuzha, Pathanamthitta, Kollam, Thiruvananthapuram</p>
          </div>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/kochiplazaconstructions">
              <TextHover text="Facebook" />
            </a>
            <a href="https://www.instagram.com/kochiplazaconstructions">
              {" "}
              <TextHover text="Instagram" />
            </a>
            <a href="tel:+919895169005">
              {" "}
              <TextHover text="Call Us" />
            </a>
          </div>
        </div>
      </div>
      <motion.div className={styles.footerColumnContainer}>
        {heights.map((height, index) => (
          <FooterColumn key={index} height={height} />
        ))}
      </motion.div>
    </div>
  );
}

export function FooterColumn({ height }) {
  return (
    <motion.div style={{ height }} className={styles.footerColumn}></motion.div>
  );
}
