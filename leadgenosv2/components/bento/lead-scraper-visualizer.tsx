import React from "react"
import { Database, Cog } from "lucide-react"

const LeadScraperVisualizer: React.FC = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center p-6 bg-transparent" role="img" aria-label="Lead Scraper Pipeline">

            {/* Main Pipeline Container */}
            <div className="flex items-center gap-4 w-full max-w-[340px]">

                {/* Left: Source Stack */}
                <div className="flex flex-col gap-1.5 shrink-0 z-10">
                    <SourceItem icon="linkedin" label="LinkedIn" delay={0} />
                    <SourceItem icon="apollo" label="Apollo" delay={0.1} />
                    <SourceItem icon="salesnav" label="Sales Nav" delay={0.2} />
                    <SourceItem icon="twitter" label="Twitter" delay={0.3} />
                    <SourceItem icon="maps" label="Maps" delay={0.4} />
                </div>

                {/* Middle: Processing Stream */}
                <div className="flex-1 relative h-12 flex items-center justify-center">
                    {/* Connection Beam - Dashed & Animated */}
                    <div className="absolute inset-x-0 h-[1px] top-1/2 -translate-y-1/2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.5)_50%)] bg-[length:10px_1px] animate-shimmer" />
                    </div>

                    {/* Processor Node */}
                    <div className="flex flex-col items-center gap-2 relative z-10">
                        <div className="w-12 h-12 bg-card border border-white/10 rounded-xl flex items-center justify-center shadow-xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-50" />
                            <Cog className="w-5 h-5 text-muted-foreground group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
                        </div>
                        {/* Label Below */}
                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Enrich</span>
                    </div>
                </div>

                {/* Right: Database Output */}
                <div className="flex flex-col items-center gap-2 shrink-0 z-10">
                    <div className="w-12 h-12 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                        <Database className="w-5 h-5 text-foreground/90 group-hover:scale-110 transition-transform" />
                        {/* Active Status */}
                        <div className="absolute top-1.5 right-1.5 flex gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-foreground/60 animate-pulse" />
                        </div>
                    </div>
                    {/* Label Below */}
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Database</span>
                </div>

            </div>
        </div>
    )
}

const SourceItem = ({ icon, label, delay }: { icon: string, label: string, delay: number }) => {

    const getIcon = (name: string) => {
        switch (name) {
            case 'linkedin': return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
            case 'apollo': return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2L2 19h20L12 2zm0 3.5L18.5 17h-13L12 5.5z" /></svg>
            case 'salesnav': return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
            case 'twitter': return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            case 'maps': return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            default: return <div className="w-3 h-3 bg-muted-foreground rounded-full" />
        }
    }

    return (
        <div
            className="flex items-center gap-2.5 px-3 py-1.5 bg-card/40 border border-white/5 rounded-lg w-[110px] group hover:bg-white/5 transition-colors"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                {getIcon(icon)}
            </div>
            <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground/90 transition-colors truncate">{label}</span>
            <div className="ml-auto w-1 h-1 rounded-full bg-transparent group-hover:bg-foreground/50 transition-colors" />
        </div>
    )
}

export default LeadScraperVisualizer
