"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./chipScroll.module.scss";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;
const FRAME_PATH = "/ezgif/ezgif-frame-";

export default function ChipScroll() {
    const containerRef = useRef(null);
    const stickyRef = useRef(null); // Reference for the sticky wrapper
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index
    // 800vh container means finer control over frames
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Load images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        const loadPromises = Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                const frameNum = (i + 1).toString().padStart(3, "0");
                img.src = `${FRAME_PATH}${frameNum}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
                    imgArray[i] = img;
                    resolve(img);
                };

                img.onerror = () => {
                    resolve(null);
                };
            });
        });

        Promise.all(loadPromises).then(() => {
            setImages(imgArray);
            setIsLoading(false);
        });

    }, []);

    // Canvas drawing logic
    // Canvas drawing logic
    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas || !images.length) return;

        const ctx = canvas.getContext("2d");
        const img = images[Math.floor(index)];

        if (!img) return;

        const draw = () => {
            if (!canvas) return;

            // Dimensions are now handled by handleResize, avoiding layout thrashing here

            // Calculate aspect ratio for "cover" effect
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height;
                drawWidth = img.width * (canvas.height / img.height);
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvas.width;
                drawHeight = img.height * (canvas.width / img.width);
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        requestAnimationFrame(draw);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        renderFrame(latest);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas && canvas.parentElement) {
                // Set canvas resolution to match device pixel ratio (DPR) for sharp rendering
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.parentElement.getBoundingClientRect();

                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;

                // Redraw immediately
                renderFrame(frameIndex.get());
            }
        };

        window.addEventListener("resize", handleResize);
        // initial sizing delayed slightly to ensure layout is ready
        setTimeout(handleResize, 100);

        return () => window.removeEventListener("resize", handleResize);
    }, [images]);

    // Initial draw
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoading, images]);


    // Text Animations - Now mapped to sequential reading in the left panel
    // We use opacity and slight Y movement for smooth transitions

    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.1, 0.2], [20, 0, -20]);

    const text2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [20, 0, -20]);

    const text3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
    const text3Y = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [20, 0, -20]);

    const text4Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]); // Stays visible at end? No, let's keep it clean.
    const text4Y = useTransform(scrollYProgress, [0.8, 0.9, 1], [20, 0, 0]);


    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.stickyWrapper} ref={stickyRef}>

                {/* Left Side: Content */}
                <div className={styles.contentSide}>

                    <div className={styles.scrollIndicator}>SCROLL TO EXPLORE</div>

                    {/* Text 1 */}
                    <motion.div style={{ opacity: text1Opacity, y: text1Y }} className={styles.textWrapper}>
                        <h2 className={styles.heading}>KochiPlaza Constructions <br />Future of Construction.</h2>
                        <p className={styles.subheading}>Redefining residential and commercial building standards across Kochi and Kerala.</p>
                    </motion.div>

                    {/* Text 2 */}
                    <motion.div style={{ opacity: text2Opacity, y: text2Y }} className={styles.textWrapper}>
                        <h2 className={styles.heading}>25+ Years <br />Construction Excellence.</h2>
                        <p className={styles.subheading}>High-quality residential, commercial, and turnkey projects delivered with precision and durability.</p>
                    </motion.div>

                    {/* Text 3 */}
                    <motion.div style={{ opacity: text3Opacity, y: text3Y }} className={styles.textWrapper}>
                        <h2 className={styles.heading}>Design Meets <br />Engineering.</h2>
                        <p className={styles.subheading}>From modern homes to large-scale commercial spaces, our solutions scale seamlessly across Kerala.</p>
                    </motion.div>

                    {/* Text 4 */}
                    <motion.div style={{ opacity: text4Opacity, y: text4Y }} className={styles.textWrapper}>
                        <h2 className={styles.heading}>Build Your <br />Vision.</h2>
                        <p className={styles.subheading}>The trusted construction partner for the next generation of spaces.</p>
                        <button className={styles.button}>Explore Our Projects</button>
                    </motion.div>

                </div>

                {/* Right Side: Animation */}
                <div className={styles.animationSide}>
                    <div className={styles.canvasWrapper}>
                        <canvas ref={canvasRef} className={styles.canvas} />
                    </div>
                    {isLoading && (
                        <div className={styles.loader}>
                            <span>System Initializing... {loadProgress}%</span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
