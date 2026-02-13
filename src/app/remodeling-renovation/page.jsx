import React from "react";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Content from "./components/Content";
import Footer from "../components/Footer/Footer";
import Marquee from "../components/Marquee/Marquee";
import Nav from "../components/Nav/Nav";

// Metadata for SEO
export const metadata = {
    title: "Home Remodeling & Renovation Services Kochi | Kerala",
    description: "Expert home remodeling and renovation services in Kochi, Kerala. Transform your space with modern kitchens, luxury bathrooms, and complete home makeovers by KochiPlaza Constructions.",
    keywords: "Home Renovation Kochi, House Remodeling Kerala, Kitchen Renovation Ernakulam, Bathroom Remodeling Kochi, Whole House Renovation Kerala, KochiPlaza Constructions",
    openGraph: {
        title: "Home Remodeling & Renovation Services Kochi | Kerala",
        description: "Transform your home with expert renovation services. Kitchens, bathrooms, and complete makeovers.",
        type: "website",
        locale: "en_IN",
        siteName: "KochiPlaza Constructions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Renovation Services Kochi",
        description: "Premium home renovations by KochiPlaza Constructions.",
    },
    alternates: {
        canonical: "https://kochiplaza.in/remodeling-renovation",
    },
};

// JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Remodeling and Renovation",
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
    "description": "Professional home remodeling and renovation services including kitchen, bathroom, and structural updates across Kerala."
};

export default function RemodelingPage() {
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
