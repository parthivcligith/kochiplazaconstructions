import React from "react";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Content from "./components/Content";
import Footer from "../components/Footer/Footer";
import Marquee from "../components/Marquee/Marquee";
import Nav from "../components/Nav/Nav";

// Metadata for SEO
export const metadata = {
    title: "Building Construction Services Kochi | Commercial Builders Kerala",
    description: "Expert building construction services in Kochi, Ernakulam and across Kerala. KochiPlaza Constructions delivers turnkey commercial projects, office complexes, and sustainable buildings with structural excellence.",
    keywords: "Building Construction Kochi, Commercial Builders Kerala, Office Construction Ernakulam, Turnkey Projects Kerala, KochiPlaza Constructions, Structural Engineering, Commercial Complex Builders",
    openGraph: {
        title: "Building Construction Services Kochi | Commercial Builders Kerala",
        description: "Expert building construction services from foundation to finish. Leading commercial builders in Kochi serving all of Kerala.",
        // images: [{ url: "/assets/images/building2.png", width: 1200, height: 630, alt: "Building Construction" }],
        type: "website",
        locale: "en_IN",
        siteName: "KochiPlaza Constructions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Building Construction Services Kochi",
        description: "Premium building construction by KochiPlaza Constructions.",
        // images: ["/assets/images/building2.png"],
    },
    alternates: {
        canonical: "https://kochiplaza.in/building-construction",
    },
};

// JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Building Construction",
    "provider": {
        "@type": "ConstructionCompany",
        "name": "KochiPlaza Constructions",
        "url": "https://kochiplaza.in",
        "logo": "https://kochiplaza.in/assets/images/logo.png",
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
    "description": "Comprehensive building construction services ranging from commercial complexes to large-scale infrastructure across all districts of Kerala."
};

export default function BuildingConstructionPage() {
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
