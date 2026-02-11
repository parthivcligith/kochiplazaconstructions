
"use client";

import { Calendar, Hammer, HardHat, Building, CheckCircle2 } from "lucide-react";
import RadialOrbitalTimeline from "./radial-orbital-timeline";

const timelineData = [
    {
        id: 1,
        title: "Planning",
        date: "Jan 2024",
        content: "Project planning, site analysis, and feasibility studies.",
        category: "Planning",
        icon: Calendar,
        relatedIds: [2],
        status: "completed",
        energy: 100,
    },
    {
        id: 2,
        title: "Design",
        date: "Feb 2024",
        content: "Architectural design, blueprints, and 3D modeling.",
        category: "Design",
        icon: Building,
        relatedIds: [1, 3],
        status: "completed",
        energy: 90,
    },
    {
        id: 3,
        title: "Construction",
        date: "Mar 2024",
        content: "Foundation laying, framing, and core structural work.",
        category: "Construction",
        icon: Hammer,
        relatedIds: [2, 4],
        status: "in-progress",
        energy: 60,
    },
    {
        id: 4,
        title: "Inspection",
        date: "Apr 2024",
        content: "Quality control, safety checks, and regulatory inspections.",
        category: "Testing",
        icon: HardHat,
        relatedIds: [3, 5],
        status: "pending",
        energy: 30,
    },
    {
        id: 5,
        title: "Handover",
        date: "May 2024",
        content: "Final finishing touches and key handover to client.",
        category: "Release",
        icon: CheckCircle2,
        relatedIds: [4],
        status: "pending",
        energy: 10,
    },
];

export default function RadialOrbitalTimelineDemo() {
    return (
        <>
            <RadialOrbitalTimeline timelineData={timelineData} />
        </>
    );
}
