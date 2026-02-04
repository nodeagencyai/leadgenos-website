import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card">
        <Image
          src="/images/dashboard-preview.png"
          alt="LeadGen OS Dashboard"
          width={1160}
          height={700}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  )
}
