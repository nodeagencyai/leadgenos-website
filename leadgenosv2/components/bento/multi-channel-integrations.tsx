import React from "react"

const MultiChannelIntegrations: React.FC = () => {
    return (
        <div className="w-full h-full relative flex flex-col p-6 pt-8" role="img" aria-label="Integrations Grid">

            {/* Grid Container - Pushed higher with pt-8 and consistent spacing */}
            <div className="grid grid-cols-4 gap-3 w-full h-full content-start">

                {/* Row 1 */}
                <IntegrationCard id="instantly" domain="instantly.ai" active delay={0} />
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />

                {/* Row 2 */}
                <EmptyCard />
                <IntegrationCard id="heyreach" domain="heyreach.io" active delay={0.1} />
                <EmptyCard />
                <IntegrationCard id="linkedin" domain="linkedin.com" active delay={0.2} />

                {/* Row 3 */}
                <IntegrationCard id="apollo" domain="apollo.io" active delay={0.3} />
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />

            </div>
        </div>
    )
}

const EmptyCard = () => (
    <div className="w-full aspect-square rounded-xl border border-white/5 bg-white/[0.02]" />
)

const IntegrationCard = ({ id, domain, active, delay }: { id: string, domain: string, active?: boolean, delay: number }) => {

    return (
        <div
            className={`w-full aspect-square rounded-xl border flex items-center justify-center transition-all duration-500 group relative overflow-hidden ${active
                ? "bg-white/5 border-white/20 shadow-lg"
                : "bg-white/[0.02] border-white/5 opacity-50"
                }`}
            style={{ animationDelay: `${delay}s` }}
        >
            {/* Inner Glow for active items */}
            {active && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}

            <div className="relative z-10 w-8 h-8 rounded-md overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                {/* Official Favicon Fetch */}
                <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={`${id} logo`}
                    className="w-full h-full object-contain"
                    width={32}
                    height={32}
                />
            </div>
        </div>
    )
}

export default MultiChannelIntegrations
