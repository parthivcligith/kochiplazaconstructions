import React from "react";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Content from "./components/Content";
import Footer from "../components/Footer/Footer";
import Marquee from "../components/Marquee/Marquee";
import Nav from "../components/Nav/Nav";

// Metadata for SEO
export const metadata = {
    title: "Swimming Pool Construction Kochi | Pool Design & Maintenance Kerala",
    description: "Expert swimming pool construction, design, and maintenance services in Kochi, Kerala. Custom pools, readymade pools, filtration systems, and pool renovation solutions by KochiPlaza Constructions.",
    keywords: "Swimming Pool Construction Kochi, Pool Builders Kerala, Custom Pool Design, Readymade Pools Kerala, Pool Maintenance Kochi, Pool Filtration Systems, Pool Renovation Kerala, KochiPlaza Constructions",
    openGraph: {
        title: "Swimming Pool Construction Services Kochi | Kerala",
        description: "Complete swimming pool solutions: Design, Build, Maintain. Leading pool contractors in Kerala.",
        type: "website",
        locale: "en_IN",
        siteName: "KochiPlaza Constructions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Swimming Pool Construction Kochi",
        description: "Expert pool construction services by KochiPlaza Constructions.",
    },
    alternates: {
        canonical: "https://kochiplazaconstructions.com/pool-construction",
    },
};

// JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Swimming Pool Construction",
    "provider": {
        "@type": "ConstructionCompany",
        "name": "KochiPlaza Constructions",
        "url": "https://kochiplazaconstructions.com",
        "logo": "https://kochiplazaconstructions.com/assets/images/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "telephone": "+919895169005"
    },
    "areaServed": {
        "@type": "State",
        "name": "Kerala"
    },
    "description": "Comprehensive swimming pool construction, renovation, and maintenance services across Kerala."
};

export default function PoolPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main>
                <Nav />
                <Hero />
                <Marquee />
                <Description />
                <Content />
                <Footer />
            </main>
        </>
    );
}
