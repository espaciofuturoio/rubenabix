import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Image from "next/image"
import profilePic from "@/app/images/profile.jpg"
import Link from "next/link"
import { SocialLinks } from "./social-links"

const NAME = "Ruben Abarca"
const TITLE = "Full Stack Engineer"
const DESCRIPTION = "Passionate about crafting elegant solutions to complex problems. With 9+ years of experience in full-stack development, I bring ideas to life through code."
const SKILLS = ["React", "Node.js/BunJS", "TypeScript", "Go", "AWS", "Google Cloud", "Web3"]

export const DeveloperProfileHero = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background min-h-screen flex items-center">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                {NAME}
                                <span className="text-primary block text-2xl sm:text-3xl lg:text-4xl mt-2">{TITLE}</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                {DESCRIPTION}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/resume"
                                className="w-full sm:w-auto text-center bg-primary text-white dark:bg-secondary dark:text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark dark:hover:bg-secondary-dark transition duration-300"
                            >
                                View Resume
                            </Link>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1DVuQAQrCEmJqSUXvv4jcmBm7-qTbcPQE"
                                className="w-full sm:w-auto text-center bg-transparent border border-primary text-primary py-2 px-4 rounded-lg shadow-md hover:bg-primary hover:text-white transition duration-300"
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4 inline-block" />
                            </a>
                        </div>
                        <SocialLinks />
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl" />
                        <Image
                            src={profilePic}
                            alt="Ruben Abarca"
                            className="relative z-10 w-full max-w-md mx-auto rounded-full border-4 border-background shadow-2xl"
                            width={400}
                            height={400}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>
    )
}
