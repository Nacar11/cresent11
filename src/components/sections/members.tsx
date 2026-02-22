"use client"

import * as React from "react"
import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Generate mock data for terms 2016 to 2026
const generateTermData = () => {
    const termsData: Record<number, any[]> = {}

    for (let year = 2026; year >= 2016; year--) {
        // Base officers for 2026
        if (year === 2026) {
            termsData[year] = [
                { name: "Bro. Elizir Lao", title: "Worshipful Master", role: "Light of the Lodge" },
                { name: "Bro. Paul Pioquinto", title: "Senior Warden", role: "Pillar of Strength" },
                { name: "Bro. Noah Caoile", title: "Junior Warden", role: "Pillar of Beauty" },
                { name: "Bro. Ricky Bendanillo", title: "Treasurer", role: "Keeper of Funds" },
                { name: "VW Roldan Pepito", title: "Secretary", role: "Recorder of Deeds" },
                { name: "VW Lock Sestoso", title: "Auditor", role: "Examiner of Accounts" },
                { name: "VW Rhomel Caudor", title: "Harmony Officer", role: "Keeper of Peace" },
            ]
        } else {
            // Shifted mock names for historical terms maintaining the same titles
            termsData[year] = [
                { name: `Past Master ${year}`, title: "Worshipful Master", role: "Light of the Lodge" },
                { name: `Senior Warden Full Name ${year}`, title: "Senior Warden", role: "Pillar of Strength" },
                { name: `Junior Warden Full Name ${year}`, title: "Junior Warden", role: "Pillar of Beauty" },
                { name: `Treasurer Full Name ${year}`, title: "Treasurer", role: "Keeper of Funds" },
                { name: `Secretary Full Name ${year}`, title: "Secretary", role: "Recorder of Deeds" },
                { name: `Auditor Full Name ${year}`, title: "Auditor", role: "Examiner of Accounts" },
                { name: `Harmony Officer Full Name ${year}`, title: "Harmony Officer", role: "Keeper of Peace" },
            ]
        }
    }
    return termsData
}

const lodgeTerms = generateTermData()
const AVAILABLE_YEARS = Object.keys(lodgeTerms).map(Number).sort((a, b) => b - a)

export default function MembersSection() {
    const [selectedYear, setSelectedYear] = useState<number>(2026)

    const handlePrevYear = () => {
        const currentIndex = AVAILABLE_YEARS.indexOf(selectedYear)
        if (currentIndex < AVAILABLE_YEARS.length - 1) {
            setSelectedYear(AVAILABLE_YEARS[currentIndex + 1])
        }
    }

    const handleNextYear = () => {
        const currentIndex = AVAILABLE_YEARS.indexOf(selectedYear)
        if (currentIndex > 0) {
            setSelectedYear(AVAILABLE_YEARS[currentIndex - 1])
        }
    }

    const currentOfficers = lodgeTerms[selectedYear]

    return (
        <section id="members" className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">Lodge Officers</h2>

                    {/* Year Selector */}
                    <div className="flex items-center justify-center gap-8 border-y border-border py-4 w-fit mx-auto">
                        <button
                            onClick={handlePrevYear}
                            disabled={selectedYear === AVAILABLE_YEARS[AVAILABLE_YEARS.length - 1]}
                            className="p-2 text-primary hover:text-accent disabled:opacity-30 disabled:hover:text-primary transition-colors duration-200"
                            aria-label="Previous Term"
                        >
                            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                        </button>

                        <div className="w-48 text-center">
                            <span className="font-serif tracking-widest text-primary text-xl uppercase">
                                Term of {selectedYear}
                            </span>
                        </div>

                        <button
                            onClick={handleNextYear}
                            disabled={selectedYear === AVAILABLE_YEARS[0]}
                            className="p-2 text-primary hover:text-accent disabled:opacity-30 disabled:hover:text-primary transition-colors duration-200"
                            aria-label="Next Term"
                        >
                            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentOfficers.map((officer, index) => (
                        <Card key={`${selectedYear}-${index}`} className="bg-card rounded-none border border-border shadow-none hover:border-accent transition-colors duration-300 animate-in fade-in zoom-in-95 duration-500">
                            <CardHeader className="pb-4 text-center">
                                <div className="w-32 h-32 mx-auto bg-muted border border-border mb-4 flex items-center justify-center">
                                    <span className="text-muted-foreground font-serif text-sm">Portrait</span>
                                </div>
                                <CardTitle className="font-serif text-xl text-primary">{officer.name}</CardTitle>
                                <CardDescription className="text-accent uppercase tracking-widest text-xs pt-2 font-semibold">
                                    {officer.title}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-foreground/70 font-sans italic">{officer.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
