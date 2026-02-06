"use client";

import { useEffect, useState } from "react";
import "./globals.scss";
import Preloader from "./components/Preloader/Loader";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always hide overflow-x
    document.body.style.overflowX = "hidden";

    // Disable scrolling for the entire body only when the page is loading
    document.body.style.overflowY = isLoading ? "hidden" : "auto";
    setTimeout(() => {
      setIsLoading(false);
    }, 3250);
  }, [isLoading]);

  // Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["ConstructionCompany", "LocalBusiness"],
    "name": "KochiPlaza Constructions",
    "image": "https://kochiplazaconstructions.com/logo.png",
    "telephone": "+91-98951-69005",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "4756+4P5 Constructions, NH66, Kavilnada, Koonammavu",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "683518",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Near Zudio, Vallathol Padi, Vidhya Nagar Colony, Thrikkakara, Edappilly",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682037",
        "addressCountry": "IN"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "10.1591",
        "longitude": "76.2673"
      },
      {
        "@type": "GeoCoordinates",
        "latitude": "10.0261",
        "longitude": "76.3105"
      }
    ],
    "url": "https://kochiplazaconstructions.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Kerala"
      },
      {
        "@type": "City",
        "name": "Kasaragod"
      },
      {
        "@type": "City",
        "name": "Kannur"
      },
      {
        "@type": "City",
        "name": "Wayanad"
      },
      {
        "@type": "City",
        "name": "Kozhikode"
      },
      {
        "@type": "City",
        "name": "Malappuram"
      },
      {
        "@type": "City",
        "name": "Palakkad"
      },
      {
        "@type": "City",
        "name": "Thrissur"
      },
      {
        "@type": "City",
        "name": "Ernakulam"
      },
      {
        "@type": "City",
        "name": "Kochi"
      },
      {
        "@type": "City",
        "name": "Idukki"
      },
      {
        "@type": "City",
        "name": "Kottayam"
      },
      {
        "@type": "City",
        "name": "Alappuzha"
      },
      {
        "@type": "City",
        "name": "Pathanamthitta"
      },
      {
        "@type": "City",
        "name": "Kollam"
      },
      {
        "@type": "City",
        "name": "Thiruvananthapuram"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/kochiplazaconstructions",
      "https://www.instagram.com/kochiplazaconstructions"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KochiPlaza Constructions | Best Construction Company in Kochi, Ernakulam, Kerala</title>
        <link rel="help" href="/llms.txt" />
        <meta name="description" content="KochiPlaza Constructions is the BEST construction company in Kochi, Ernakulam, and Kerala. We specialize in House Construction, Renovation, Building Construction, Pool Construction, and Turnkey projects. Serving all Kerala districts: Kasaragod, Kannur, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Idukki, Kottayam, Alappuzha, Pathanamthitta, Kollam, Thiruvananthapuram." />
        <meta name="keywords" content="best construction company in Kerala, best house construction kochi, renovation experts kerala, pool construction kochi, building construction ernakulam, turnkey projects kerala, luxury home builders, commercial construction kochi, swimming pool builders kerala, top builders in ernakulam" />
        <meta name="author" content="KochiPlaza Constructions" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi, Kerala" />
        <meta name="geo.position" content="10.1591;76.2673" />
        <meta name="ICBM" content="10.1591, 76.2673" />

        {/* Open Graph */}
        <meta property="og:title" content="KochiPlaza Constructions | Best Construction Company in Kochi, Kerala" />
        <meta property="og:description" content="Trusted construction company in Kochi offering residential, commercial & turnkey construction across all Kerala districts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kochiplazaconstructions.com" />
        <meta property="og:locale" content="en_IN" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
