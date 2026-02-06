import { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import Menu from "./Menu/Menu";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./Menu/anim";
import TextHover from "../TextHover/TextHover";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // Always hide overflow-x
    document.body.style.overflowX = "hidden";

    // Disable scrolling for the entire body only when the menu is open
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("open");
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`${styles.islandNav} ${isMenuOpen ? styles.open : ""}`}>
        <h4 className={styles.menuOpener} onClick={() => toggleMenu()}>
          <TextHover text="( Our Services )" />
        </h4>

        <div className={styles.logo}>
          <img src="/assets/images/logo.png" alt="KochiPlaza Logo" className={styles.logoImage} />
        </div>

        <h4 className={styles.contactLink} onClick={scrollToFooter}>
          <TextHover text="( Contact )" />
        </h4>
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className={styles.close}
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/assets/icons/close.svg" alt="" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
    </>
  );
}
