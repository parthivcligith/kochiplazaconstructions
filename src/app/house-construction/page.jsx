import React from "react";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Content from "./components/Content";
import Footer from "../components/Footer/Footer";
import Marquee from "../components/Marquee/Marquee";
import Nav from "../components/Nav/Nav";

// Metadata for SEO
export const metadata = {
    title: "House Construction Services Kochi | Residential Builders Kerala",
    description: "Expert house construction services in Kochi, Ernakulam and across Kerala. KochiPlaza Constructions delivers turnkey residential projects, luxury villas, and homes with superior craftsmanship.",
    keywords: "House Construction Kochi, Residential Builders Kerala, Turnkey Construction Ernakulam, Home Builders Kerala, KochiPlaza Constructions, Villa Construction, House Plans",
    openGraph: {
        title: "House Construction Services Kochi | Residential Builders Kerala",
        description: "Expert house construction services from foundation to finish. Leading builders in Kochi serving all of Kerala.",
        images: [{ url: "/public/house/hero-1.png", width: 1200, height: 630, alt: "House Construction" }],
        type: "website",
        locale: "en_IN",
        siteName: "KochiPlaza Constructions",
    },
    twitter: {
        card: "summary_large_image",
        title: "House Construction Services Kochi",
        description: "Premium residential construction by KochiPlaza Constructions.",
        images: ["/public/house/hero-1.png"],
    },
    alternates: {
        canonical: "https://kochiplazaconstructions.com/house-construction",
    },
};

// JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "House Construction",
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
    "description": "Comprehensive house construction services ranging from luxury villas to affordable homes across all districts of Kerala."
};

export default function HouseConstructionPage() {
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
