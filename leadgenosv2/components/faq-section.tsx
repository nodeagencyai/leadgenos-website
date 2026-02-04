"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is LeadGenOS and who is it for?",
    answer:
      "LeadGenOS is a done-for-you outbound system that handles everything from scraping to sending. We set up your entire lead generation infrastructure so you don't have to juggle Apollo, Clay, ChatGPT, Instantly, and spreadsheets. We build the campaigns, configure the integrations, and hand you a working system. It's built for sales teams tired of manual prospecting, agencies running outbound for multiple clients, and founders who want an SDR's output without the headcount. We handle the technical setup and configuration. You handle closing deals.",
  },
  {
    question: "Which platforms can I scrape leads from?",
    answer:
      "We scrape from Apollo, LinkedIn, Sales Navigator, Twitter/X, and any custom source you need. Unlike tools that lock you into one platform, we pull leads from wherever your ideal customers live. Apollo gives you verified B2B emails and company data. LinkedIn and Sales Navigator give you decision-makers with advanced filters. Twitter/X provides intent signals and real-time engagement data. Need something custom? Upload CSVs, connect your CRM, or integrate proprietary databases. We dedupe across all sources and merge the best data into one enriched profile per lead.",
  },
  {
    question: "How does AI-powered enrichment work?",
    answer:
      "We enrich every lead with 50+ datapoints, then use AI to turn that research into personalized copy. First, we research each lead for recent company news, LinkedIn activity, tech stack, funding rounds, hiring signals, and competitor mentions. Then AI analyzes the data to identify the most relevant talking points for your offer. Finally, we generate personalized emails where every message references real context, not generic templates. The result is emails that feel hand-written at scale. Most clients see 2-3x higher reply rates compared to basic mail merge.",
  },
  {
    question: "What outreach tools do you integrate with?",
    answer:
      "We connect to Instantly.ai for email and HeyReach for LinkedIn so you keep using the tools that work. LeadGenOS is the command center where we build your campaigns with scraping, research, and AI copy. Then we push them to Instantly for email sequences and HeyReach for LinkedIn outreach. You track all performance in one unified dashboard. Already using these tools? Perfect. We plug right in and your existing campaigns, domains, and deliverability setup stay intact. Don't have them yet? We'll help you set them up as part of onboarding.",
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer:
      "Your data lives in your own private database. Encrypted, compliant, and never shared. We set up a private Supabase instance so your data isn't mixed with other clients. Everything is encrypted at rest and in transit, and we follow strict GDPR and CCPA data handling protocols. You own everything and can export or delete your data anytime. We never sell your lead data to third parties, use your campaigns to train AI models, or store credit card info (payments go through Stripe). Think of it like your own private sales intelligence database that we configure and manage for you.",
  },
  {
    question: "Can I track my spending on AI and API usage?",
    answer:
      "Yes, and you'll never get surprised by a $500 AI bill again. Our cost tracking dashboard shows you exactly what you're spending across AI credits for GPT-5 and Claude enrichment, Instantly.ai email sends, HeyReach LinkedIn credits, Apollo API calls, and any other integrated tools. You can set daily and monthly spending caps, get alerts before you hit limits, see cost-per-lead and cost-per-reply and cost-per-meeting metrics, and pause campaigns automatically if budget is exceeded.",
  },
  {
    question: "How is this different from just using Apollo or Clay?",
    answer:
      "Apollo gives you data. Clay gives you workflows. We give you deployed campaigns. Apollo finds contact info but you still have to export it, enrich it elsewhere, write emails, and send manually. Clay enriches and organizes data but you still have to write copy, set up sending tools, and manage campaigns yourself. LeadGenOS scrapes, enriches, writes, and sends. All configured and ready to run. We're not a tool you have to learn, we're a team that builds your outbound system for you.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Questions? We've Got Answers.
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            The most common questions from sales leaders just like you.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
