import React from "react"
import { Sparkles, User, Linkedin, Mail, Building2 } from "lucide-react"

const AILeadEnrichment: React.FC = () => {
  return (
    <div
      className="w-full h-full relative"
      role="img"
      aria-label="AI Lead Enrichment interface"
    >
      {/* Background abstract elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

      {/* Main Profile Card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[320px] bg-card/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl"
      >
        {/* Card Header - Monochromatic */}
        <div className="p-4 border-b border-white/5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-white/5 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground truncate">Global Logistics Inc.</h3>
            <p className="text-xs text-muted-foreground truncate">Logistics & Supply Chain • 500-1000 emp.</p>
            <div className="flex gap-2 mt-2">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                <GlobeIcon className="w-3 h-3" />
                <span>globallogistics.io</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="p-4 space-y-3 bg-black/5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-foreground/70 animate-pulse" />
            <span className="text-xs font-medium text-foreground/80">AI Interaction Plan</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-foreground/5 border border-white/5">
              <p className="text-[11px] leading-relaxed text-muted-foreground font-mono">
                "Noticed your expansion into the APAC region. Our automated scheduling handles multi-zone logistics..."
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 opacity-80">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-wider">Strategy</span>
                <span className="text-[10px] text-foreground/60">Efficiency Pitch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-2.5 bg-white/5 border-t border-white/5 flex gap-2">
          <div className="flex-1 h-7 bg-foreground/10 rounded flex items-center justify-center gap-1.5 border border-white/5 hover:bg-foreground/15 transition-colors">
            <Mail className="w-3 h-3 text-foreground/80" />
            <span className="text-[10px] font-medium text-foreground/80">Draft Outreach</span>
          </div>
          <div className="w-7 h-7 bg-white/5 rounded flex items-center justify-center border border-white/10">
            <User className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export default AILeadEnrichment
