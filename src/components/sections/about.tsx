"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState<"about" | "mission" | "history">("about")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const aboutImages = ["/about-us-1.jpg", "/about-us-2.jpg", "/about-us-3.jpg", "/about-us-4.jpg"]

    const nextImage = () => {
        setDirection(1)
        setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }

    const prevImage = () => {
        setDirection(-1)
        setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0
        })
    };

    return (
        <section id="about" className="py-24 bg-card min-h-screen flex items-center">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">

                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Tabs Navigation */}
                        <div className="flex border-b border-border">
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`px-6 py-4 font-serif text-xl font-semibold tracking-wide transition-colors duration-200 ${activeTab === "about"
                                    ? "text-primary border-b-2 border-accent"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => setActiveTab("mission")}
                                className={`px-6 py-4 font-serif text-xl font-semibold tracking-wide transition-colors duration-200 ${activeTab === "mission"
                                    ? "text-primary border-b-2 border-accent"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                Our Mission
                            </button>
                            <button
                                onClick={() => setActiveTab("history")}
                                className={`px-6 py-4 font-serif text-xl font-semibold tracking-wide transition-colors duration-200 ${activeTab === "history"
                                    ? "text-primary border-b-2 border-accent"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                Our History
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="min-h-[300px] relative">
                            <AnimatePresence mode="wait">
                                {activeTab === "about" ? (
                                    <motion.div
                                        key="about-content"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="space-y-6"
                                    >
                                        <blockquote className="border-l-4 border-accent pl-6 py-2 my-6">
                                            <p className="font-serif text-2xl md:text-3xl text-primary italic leading-tight">
                                                "A Brotherhood of Men under the Fatherhood of God"
                                            </p>
                                        </blockquote>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            Crescent Masonic Lodge No. 419 stands as a beacon of light, charity, and brotherhood. We are a solemn fraternity dedicated to the moral and spiritual uplifting of our members and the community we serve.
                                        </p>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            Following the ancient traditions of Freemasonry, our brethren are bound by the shared commitment to truth, relief, and brotherly love. We welcome men of good character who seek to improve themselves and contribute to the betterment of society.
                                        </p>
                                    </motion.div>
                                ) : activeTab === "mission" ? (
                                    <motion.div
                                        key="mission-content"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="space-y-6"
                                    >
                                        <h3 className="font-serif text-2xl text-primary font-bold mb-2">The Vision of Term 2026</h3>
                                        <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-6">Under the Leadership of WM Bro. Elizir Lao</p>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            The core mission for the current Lodge year is to heavily emphasize internal brotherhood and the fortification of our fraternal bonds. Before we can truly serve the world, we must first ensure the strength and unity of the brethren within our own walls.
                                        </p>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            Guided by this renewed strength, Crescent Masonic Lodge No. 419 is deeply committed to expanding our charitable programs. We focus our relief efforts on tangible, impactful community service, ensuring that Masonic charity remains a living, active force in our district.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="history-content"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="space-y-6"
                                    >
                                        <h3 className="font-serif text-2xl text-primary font-bold">The Legacy of 419</h3>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            Since our founding, Crescent Masonic Lodge No. 419 has stood as a pillar of tradition and moral architectonics in our jurisdiction. Bound by the ancient precepts of Free and Accepted Masons, our history is one of continuous service and dedication.
                                        </p>
                                        <p className="text-foreground/80 leading-relaxed font-sans text-lg">
                                            Through generations of solemn work and unwavering commitment to ethical rectitude, our brethren continue the timeless legacy of building character, fostering charity, and spreading the light of understanding in an ever-changing world.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Interchangeable Image */}
                    <div className={`relative transition-all duration-500 bg-sidebar-border/30 border border-border p-1 lg:p-2 shadow-sm flex items-center justify-center overflow-hidden ${activeTab === "about" ? "aspect-[3/2] sm:aspect-[16/10]" : activeTab === "mission" ? "aspect-[3/4]" : "aspect-square"
                        }`}>
                        <div className="relative w-full h-full bg-white border border-accent/20 overflow-hidden">
                            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                {activeTab === "about" ? (
                                    <motion.div
                                        key={`about-image-${currentImageIndex}`}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <div className="relative w-full h-full shadow-md overflow-hidden bg-background">
                                            <Image
                                                src={aboutImages[currentImageIndex]}
                                                alt={`Lodge Brethren ${currentImageIndex + 1}`}
                                                fill
                                                className="object-cover object-center"
                                            />
                                            {/* Solemn overlay for the portrait */}
                                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
                                        </div>
                                    </motion.div>
                                ) : activeTab === "mission" ? (
                                    <motion.div
                                        key="mission-image"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src="/wm_silhouette.png"
                                            alt="Worshipful Master Silhouette"
                                            fill
                                            className="object-cover object-center"
                                        />
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="history-image"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src="/logo-transparent.png"
                                            alt="Masonic Lodge Logo"
                                            fill
                                            className="object-contain p-8 object-center"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Static Carousel Navigation */}
                            {activeTab === "about" && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-[#D4AF37] bg-transparent flex items-center justify-center transition-opacity hover:opacity-70 duration-300 z-10 drop-shadow-md"
                                        aria-label="Previous Image"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 sm:w-10 sm:h-10">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-[#D4AF37] bg-transparent flex items-center justify-center transition-opacity hover:opacity-70 duration-300 z-10 drop-shadow-md"
                                        aria-label="Next Image"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className="w-8 h-8 sm:w-10 sm:h-10">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
