import "./globals.scss";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "KochiPlaza Constructions | Best Construction Company in Kochi, Ernakulam, Kerala",
  description: "KochiPlaza Constructions is the BEST construction company in Kochi, Ernakulam, and Kerala. We specialize in House Construction, Renovation, Building Construction, Pool Construction, and Turnkey projects. Serving all Kerala districts: Kasaragod, Kannur, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Idukki, Kottayam, Alappuzha, Pathanamthitta, Kollam, Thiruvananthapuram.",
  keywords: "best construction company in Kerala, top builders in Kochi, house construction Ernakulam, luxury villas Kochi, low cost house construction Kerala, turnkey projects Kerala, renovation architects Kochi, interior designers Ernakulam, commercial builders Kerala, swimming pool construction Kochi, civil contractors Ernakulam, home builders in Aluva, construction company in Kakkanad, builders in Edappally, house construction in Thiruvananthapuram, villa projects in Kollam, builders in Pathanamthitta, construction services Alappuzha, home renovation Kottayam, builders in Idukki, construction company Thrissur, house builders Palakkad, construction company Malappuram, builders in Kozhikode, construction services Wayanad, home builders Kannur, construction company Kasaragod, affordable housing Kerala, premium villas Kochi, modern house design Kerala, traditional kerala architecture, green building construction Kerala, sustainable construction Kochi, earthquake resistant homes Kerala, vaastu compliant house plans, best architects in Kochi, top civil engineers Kerala, construction material suppliers Kochi, building contractors Aluva, house construction Angamaly, builders in Tripunithura, construction company in Vyttila, home builders in Palarivattom, construction services in Kaloor, renovation experts in Fort Kochi, interior design studios Kochi, modular kitchen designers Ernakulam, false ceiling contractors Kochi, painting services Ernakulam, electrical contractors Kochi, plumbing services Kerala, flooring contractors Kochi, roofing solutions Kerala, landscaping services Kochi, garden designers Ernakulam, swimming pool maintenance Kerala, waterproofing contractors Kochi, structural glazing Kerala, facade design Kochi, steel building construction Kerala, prefab house construction Kerala, container homes Kerala, wooden house construction Kerala, eco-friendly homes Kochi, budget home builders Kerala, luxury apartment builders Kochi, flat construction Ernakulam, commercial complex builders Kerala, shopping mall construction Kochi, hotel construction Kerala, resort builders Kerala, hospital construction Kerala, school building construction Kerala, warehouse construction Kochi, industrial building construction Kerala, factory construction Kerala, godown construction Kochi, cold storage construction Kerala, convention center builders Kerala, auditorium construction Kerala, church construction Kerala, mosque construction Kerala, temple construction Kerala, community hall construction Kerala, sports complex construction Kerala, stadium construction Kerala, road construction Kerala, bridge construction Kerala, infrastructure development Kerala, real estate developers Kochi, property developers Ernakulam, land developers Kerala, housing projects Kerala, gated community villas Kochi, retirement homes Kerala, holiday homes Kerala, farmhouse construction Kerala, guest house construction Kerala, homestay construction Kerala, service apartment construction Kochi, hostel construction Kerala, pg accommodation construction Kochi, office space construction Kochi, it park construction Kerala, coworking space construction Kochi, showroom construction Kerala, restaurant construction Kochi, cafe interior design Kerala, bakery interior design Kochi, gym construction Kerala, spa interior design Kochi, salon interior design Kerala, boutique interior design Kochi, jewelry shop interior design Kerala, supermarket interior design Kochi, pharmacy interior design Kerala, clinic interior design Kochi, laboratory construction Kerala, research center construction Kochi, educational institute construction Kerala, college building construction Kerala, university campus construction Kerala, library construction Kerala, museum construction Kerala, art gallery construction Kochi, theater construction Kerala, cinema hall construction Kerala, multiplex construction Kochi, drive-in cinema construction Kerala, open air theater construction Kerala, floating house construction Kerala, houseboat construction Kerala, tree house construction Kerala, mud house construction Kerala, bamboo house construction Kerala, exposed brick house construction Kerala, vernacular architecture Kerala, contemporary house design Kerala, minimal house design Kochi, scandinavian house design Kerala, industrial style house design Kochi, bohemian style interior design Kerala, rustic style interior design Kochi, coastal style interior design Kerala, tropical style house design Kochi, colonial style house design Kerala, art deco style interior design Kochi, mid-century modern interior design Kerala, farmhouse style interior design Kochi, shabby chic interior design Kerala, eclectic interior design Kochi, asian zen interior design Kerala, feng shui interior design Kochi, wabi sabi interior design Kerala, japandi interior design Kochi, biophilic design Kerala, smart home automation Kochi, home theater installation Kerala, security system installation Kochi, solar panel installation Kerala, rainwater harvesting system Kochi, waste management system Kerala, biogas plant installation Kochi, water treatment plant Kerala, sewage treatment plant Kochi, fire fighting system installation Kerala, hvac system installation Kochi, lift installation Kerala, escalator installation Kochi, generator installation Kerala, ups installation Kochi, inverter installation Kerala, cctv header installation Kochi, networking services Kerala, intercom system installation Kochi, video door phone installation Kerala, access control system Kochi, boom barrier installation Kerala, automatic gate installation Kochi, rolling shutter installation Kerala, aluminium fabrication Kochi, glass fabrication Kerala, steel fabrication Kochi, wood work Kerala, carpentry services Kochi, furniture manufacturing Kerala, custom furniture Kochi, sofa manufacturing Kerala, bed manufacturing Kochi, dining table manufacturing Kerala, wardrobe manufacturing Kochi, kitchen cabinet manufacturing Kerala, office furniture manufacturing Kochi, school furniture manufacturing Kerala, hospital furniture manufacturing Kochi, hotel furniture manufacturing Kerala, restaurant furniture manufacturing Kochi, outdoor furniture manufacturing Kerala, patio furniture Kochi, garden furniture Kerala, swing manufacturing Kochi, hammock manufacturing Kerala, gazebo construction Kochi, pergola construction Kerala, trellis construction Kochi, arbor construction Kerala, fence construction Kochi, compound wall construction Kerala, gate design Kochi, grill design Kerala, railing design Kochi, staircase design Kerala, balcony design Kochi, terrace garden design Kerala, roof garden design Kochi, vertical garden design Kerala, indoor garden design Kochi, courtyard design Kerala, patio design Kochi, deck design Kerala, pool deck design Kochi, driveway design Kerala, walkway design Kochi, pathway design Kerala, pavement design Kochi, parking tile design Kerala, interior wall texture Kochi, exterior wall texture Kerala, wall cladding Kochi, stone cladding Kerala, brick cladding Kochi, tile cladding Kerala, acp cladding Kochi, glazing work Kerala, curtain wall glazing Kochi, spider glazing Kerala, patch fitting glazing Kochi, toughened glass work Kerala, laminated glass work Kochi, insulated glass work Kerala, tinted glass work Kochi, frosted glass work Kerala, etched glass work Kochi, stained glass work Kerala, bevelled glass work Kochi, lacquered glass work Kerala, back painted glass work Kochi, mirror work Kerala, shower cubicle work Kochi, glass partition work Kerala, aluminium partition work Kochi, gypsum partition work Kerala, plywood partition work Kochi, mdf partition work Kerala, particle board partition work Kochi, hdf partition work Kerala, wpc partition work Kochi, pvc partition work Kerala, upvc window work Kochi, aluminium window work Kerala, wooden window work Kochi, steel window work Kerala, iron window work Kochi, french window work Kerala, bay window work Kochi, corner window work Kerala, skylight work Kochi, ventilator work Kerala, door frame work Kochi, door shutter work Kerala, flush door work Kochi, panel door work Kerala, solid wood door work Kochi, engineered wood door work Kerala, laminated door work Kochi, veneer door work Kerala, pvc door work Kochi, upvc door work Kerala, aluminium door work Kochi, glass door work Kerala, sliding door work Kochi, folding door work Kerala, revolving door work Kochi, automatic door work Kerala, sensor door work Kochi, rolling shutter work Kerala, collapsible gate work Kochi, sliding gate work Kerala, swing gate work Kochi, automated gate work Kerala, remote control gate work Kochi",
  authors: [{ name: "KochiPlaza Constructions" }],
  icons: {
    icon: '/assets/images/logo1.ico',
    shortcut: '/assets/images/logo1.ico',
    apple: '/assets/images/logo1.ico',
  },
  openGraph: {
    title: "KochiPlaza Constructions | Best Construction Company in Kochi, Kerala",
    description: "Trusted construction company in Kochi offering residential, commercial & turnkey construction across all Kerala districts.",
    type: "website",
    url: "https://kochiplaza.in",
    locale: "en_IN",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi, Kerala",
    "geo.position": "10.1591;76.2673",
    "ICBM": "10.1591, 76.2673",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["ConstructionCompany", "LocalBusiness"],
    "name": "KochiPlaza Constructions",
    "image": "https://kochiplaza.in/logo.png",
    "telephone": "+91-98951-69005",
    "priceRange": "$$",
    "description": "KochiPlaza Constructions is a premier construction company based in Kochi and Ernakulam, dedicated to delivering world-class residential and commercial building solutions across all 14 districts of Kerala. Our expertise encompasses a wide range of services including luxury villa construction, budget-friendly home building, commercial complex development, office spaces, turnkey project execution, and meticulous renovation services. We are renowned for our superior craftsmanship, clear communication, and timely project delivery. Whether you are looking to build your dream home in Thiruvananthapuram, a vacation villa in Wayanad, a commercial hub in Kozhikode, or perform a complete home makeover in Thrissur, KochiPlaza Constructions is your trusted partner. Our team of experienced architects, civil engineers, and interior designers work collaboratively to bring your vision to life, ensuring every detail meets the highest standards of quality and aesthetics. We optimize for sustainable and eco-friendly construction practices, offering green building solutions that stand the test of time. From initial soil testing and architectural planning to structural engineering, interior finishing, and final handover, we manage the entire construction lifecycle with professionalism and transparency. Contact us today for the best construction services in Aluva, Kakkanad, Edappally, Vyttila, and beyond.",
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
    "url": "https://kochiplaza.in",
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Building Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Renovation and Remodeling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Villa Projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hospital Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "School Building Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sustainable Green Building"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
