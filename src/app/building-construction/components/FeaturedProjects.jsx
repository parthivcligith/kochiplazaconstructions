"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
    { id: 1, src: "/assets/images/house1.jpg", title: "Luxury Villa", location: "Kochi" },
    { id: 2, src: "/assets/images/house2.jpg", title: "Corporate HQ", location: "Ernakulam" },
    { id: 3, src: "/assets/images/house3.png", title: "Skyline Apartments", location: "Trivandrum" },
    { id: 4, src: "/assets/images/building1.png", title: "Shopping Complex", location: "Thrissur" },
    { id: 5, src: "/assets/images/house4.png", title: "Modern Residence", location: "Kozhikode" },
    { id: 6, src: "/assets/images/creation_2344042398.png", title: "Eco Resort", location: "Wayanad" },
];

export default function FeaturedProjects() {
    return (
        <div style={{ padding: "100px 5vw", background: "#f5f5f5" }}>
            <h2 style={{ fontSize: "3rem", marginBottom: "50px", textAlign: "center" }}>Featured Projects</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px"
            }}>
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        style={{
                            position: "relative",
                            aspectRatio: "4/3",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                    >
                        <img
                            src={project.src}
                            alt={project.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            padding: "20px",
                            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                            color: "white"
                        }}>
                            <h3 style={{ margin: 0, fontSize: "1.5rem" }}>{project.title}</h3>
                            <p style={{ margin: 0, opacity: 0.8 }}>{project.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
