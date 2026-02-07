"use client";

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Loader";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Disable scrolling for the entire body only when the page is loading
        document.body.style.overflowY = isLoading ? "hidden" : "auto";
        setTimeout(() => {
            setIsLoading(false);
        }, 3250);
    }, [isLoading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <ScrollProgress />
            {children}
        </>
    );
}
