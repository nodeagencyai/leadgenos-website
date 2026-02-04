"use client"



export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 py-10 border-t border-border/40">
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="text-foreground text-lg font-semibold">LeadGenOS</div>
        <p className="text-muted-foreground text-sm">Outbound, on autopilot.</p>
      </div>

      <div className="flex items-center gap-6 md:gap-8">
        <a
          href="https://www.nodeagency.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
        >
          Node Agency
        </a>
        <a
          href="https://www.linkedin.com/in/cristoforo-perrone-nodeagencyai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
