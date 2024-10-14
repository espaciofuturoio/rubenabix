"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react"
import Link from "next/link"


type TimelineItem = {
    id: string
    date: string
    title: string
    company: string
    description: string
    technologies: string[]
}

const timelineData: TimelineItem[] = [
    {
        id: "2023-2024",
        date: "March 2023 – October 2024",
        title: "Full Stack Developer",
        company: "Full-stack Engineer @ Deezy Inc, USA",
        description: "Developed an open-source Marketplace for selling ordinals, leveraging blockchain technology. API development for Rare Satoshis (rare Bitcoin inscriptions). Built a tax application tailored for Bitcoin transactions.",
        technologies: ["ReactJS", "TypeScript", "NodeJS", "Next.JS", "PostgreSQL", "Blockchain", "Nostr", "Bitcoin", "Ordinals", "Runes", "BRC20"],
    },
    {
        id: "2022-2023",
        date: "2022 - 2023",
        title: "Full Stack Developer",
        company: "RareMint / Bitcash Bank",
        description: "Created RareMint web application offering authentic real world collectible assets and digital experiences through asset-backed NFTs. Contributed to Bitcash Bank.",
        technologies: ["ReactJS", "TypeScript", "NodeJS", "Next.JS", "Remix", "Hasura", "GraphQL"],
    },
    {
        id: "2021-2022",
        date: "2021 - 2022",
        title: "React Developer",
        company: "Keeper Solutions / Bitcash Bank",
        description: "Developed a real estate project for comparing and analyzing property financial health. Created an MVP web/blockchain application named Keeper Tokens. Worked on BitcashBank web-blockchain application for exchanging US dollars with bitcashUSD.",
        technologies: ["ReactJS", "TypeScript", "NodeJS"],
    },
    {
        id: "2021",
        date: "2021",
        title: "Full Stack Developer (Freelance)",
        company: "Pernix Solutions",
        description: "Created a React Application for a professional network for architects and firms named Spectacular. Improved a web application for patient care.",
        technologies: ["Loopback.js", "Vue.js", "Go", "GraphQL", "ReactJS", "TypeScript"],
    },
    {
        id: "2019-2020",
        date: "2019 - 2020",
        title: "Full Stack Developer - Blockchain Developer",
        company: "EOS Costa Rica",
        description: "Designed and implemented tools for a blockchain system for intercompany transactions. Developed CI/CD plans with REST, event-driven and microservices architecture. Contributed to a container logistic software with image recognition, SmartGate.",
        technologies: ["Docker", "NodeJS", "PostgreSQL", "EOS - blockchain", "Kubernetes", "GraphQL", "React", "Hasura"],
    },
    {
        id: "2017-2019",
        date: "2017 - 2019",
        title: "NodeJS Backend Developer",
        company: "Wink",
        description: "Created the technological stack of the first 100% digital financial system in Costa Rica based on a serverless architecture with at least 25 microservices. Provided architectural design, coordination, implementation, and maintenance of both backend and frontend.",
        technologies: ["PayPal", "Twilio", "React Native", "NodeJS", "GraphQL", "MySQL", "AWS", "ServerlessJS", "Mailchimp", "Apollo"],
    },
    {
        id: "2015-2017",
        date: "2015 - 2017",
        title: "Full Stack Developer",
        company: "HS Sportsbook",
        description: "Developed multiple high-performance, scalable products for betting websites with realtime betting, handling more than 80M lines per second for over 80,000 daily users.",
        technologies: ["Redis", "AngularJS", "MongoDB", "NodeJS", "MSSQL", "SQL Server"],
    },
    {
        id: "2014-2015",
        date: "2014 - 2015",
        title: "Web Developer",
        company: "Pernix-Solutions",
        description: "Worked closely with the team lead, maintaining direct contact with clients to implement crafted applications.",
        technologies: ["AngularJS", "NodeJS", "React"],
    },
]

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const contentRef = useRef<HTMLParagraphElement>(null)
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    useEffect(() => {
        if (contentRef.current) {
            setShowButton(contentRef.current.scrollHeight > contentRef.current.clientHeight)
        }
    }, [item.description])

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="mb-8"
        >
            <Card className="relative overflow-hidden">
                <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary">{item.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm font-medium">
                            {item.date}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p
                        ref={contentRef}
                        className={`text-muted-foreground mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}
                    >
                        {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    {showButton && (
                        <button
                            type="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors"
                        >
                            {isExpanded ? (
                                <>
                                    <ChevronUp className="mr-1 h-4 w-4" />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="mr-1 h-4 w-4" />
                                    Show More
                                </>
                            )}
                        </button>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}

export const EnhancedDeveloperProfileTimeline = () => {
    return (
        <div className="min-h-screen bg-background">
            <nav className="sticky top-0 z-10 bg-background border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/">
                        <Button variant="ghost" className="flex items-center">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </nav>
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
                <div className="max-w-3xl mx-auto">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}