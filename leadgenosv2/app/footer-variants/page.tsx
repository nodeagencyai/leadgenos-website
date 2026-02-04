"use client"

import { Linkedin, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FooterVariantsPage() {
    const BrandLogo = () => (
        <div className="w-8 h-8 relative text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                <rect width="100%" height="100%" fill="transparent" />
                <g transform="translate(-95, 16)">
                    <polygon points="479.33 92.23 479.33 387.15 351.41 313.29 351.41 239.69 415.14 276.49 415.14 129.29 479.33 92.23" fill="currentColor" />
                    <polygon points="351.41 166.09 351.41 239.69 287.67 202.89 287.49 350.2 222.58 387.67 222.58 91.71 351.41 166.09" fill="currentColor" />
                </g>
            </svg>
        </div>
    )

    return (
        <div className="min-h-screen bg-background py-20 px-6 space-y-24">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <h1 className="text-3xl font-bold text-foreground">Footer Design Variants</h1>
                <p className="text-muted-foreground">Review the options below and choose your favorite layout.</p>
            </div>

            {/* VARIANT 1: THE CLEAN SPLIT (Current Refined) */}
            <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">Option A: The Clean Split (Classic)</h2>
                <div className="border border-border rounded-xl bg-card/50 overflow-hidden">
                    <div className="h-64 bg-background/50 flex items-center justify-center text-muted-foreground/20 text-sm">Valid Content Area</div>
                    <footer className="w-full px-8 py-10 border-t border-border/40 bg-background">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                            <div className="flex flex-col items-center md:items-start gap-4">
                                <div className="flex items-center gap-2">
                                    <BrandLogo />
                                    <span className="text-foreground text-lg font-semibold">LeadGenOS</span>
                                </div>
                                <p className="text-muted-foreground text-sm">Outbound, on autopilot.</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full border border-transparent hover:border-border">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full border border-transparent hover:border-border">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>

            {/* VARIANT 2: THE CENTERED STACK */}
            <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">Option B: The Centered Stack (Editorial)</h2>
                <div className="border border-border rounded-xl bg-card/50 overflow-hidden">
                    <div className="h-64 bg-background/50 flex items-center justify-center text-muted-foreground/20 text-sm">Valid Content Area</div>
                    <footer className="w-full px-8 py-16 bg-background flex flex-col items-center justify-center gap-8 border-t border-border/40">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 text-foreground mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                                    <rect width="100%" height="100%" fill="transparent" />
                                    <g transform="translate(-95, 16)">
                                        <polygon points="479.33 92.23 479.33 387.15 351.41 313.29 351.41 239.69 415.14 276.49 415.14 129.29 479.33 92.23" fill="currentColor" />
                                        <polygon points="351.41 166.09 351.41 239.69 287.67 202.89 287.49 350.2 222.58 387.67 222.58 91.71 351.41 166.09" fill="currentColor" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-foreground text-xl font-semibold tracking-tight">LeadGenOS</h3>
                            <p className="text-muted-foreground text-sm font-medium">Outbound, on autopilot.</p>
                        </div>

                        <div className="flex items-center gap-8 pt-4 border-t border-border/40 w-full max-w-xs justify-center">
                            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group">
                                <Globe className="w-4 h-4 group-hover:text-primary transition-colors" />
                                <span>Node Agency</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group">
                                <Linkedin className="w-4 h-4 group-hover:text-[#0A66C2] transition-colors" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </footer>
                </div>
            </section>

            {/* VARIANT 3: THE FLOATING DOCK (Modern SaaS) */}
            <section className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">Option C: The Floating Dock (Glassmorphism)</h2>
                <div className="border border-border rounded-xl bg-gradient-to-b from-background to-secondary/20 overflow-hidden relative">
                    <div className="h-80 flex items-center justify-center text-muted-foreground/20 text-sm">Valid Content Area</div>

                    <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
                        <footer className="bg-background/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3 flex items-center gap-8 md:gap-12">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                                        <rect width="100%" height="100%" fill="transparent" />
                                        <g transform="translate(-95, 16)">
                                            <polygon points="479.33 92.23 479.33 387.15 351.41 313.29 351.41 239.69 415.14 276.49 415.14 129.29 479.33 92.23" fill="currentColor" />
                                            <polygon points="351.41 166.09 351.41 239.69 287.67 202.89 287.49 350.2 222.58 387.67 222.58 91.71 351.41 166.09" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-foreground font-semibold text-sm hidden md:block">LeadGenOS</span>
                            </div>

                            <div className="w-px h-4 bg-border/50"></div>

                            <div className="flex items-center gap-4">
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" aria-label="Website">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </div>
    )
}
