"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_MEDIA = {
    github: "https://github.com/rubenabix",
    linkedin: "https://www.linkedin.com/in/rubenabix/",
    email: "mailto:rubenabix@gmail.com",
}


export const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Button type="button" variant="ghost" size="icon" aria-label="GitHub" onClick={() => window.open(SOCIAL_MEDIA.github, "_blank")}>
                <Github className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" aria-label="LinkedIn" onClick={() => window.open(SOCIAL_MEDIA.linkedin, "_blank")}>
                <Linkedin className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" aria-label="Email" onClick={() => window.open(SOCIAL_MEDIA.email, "_blank")}>
                <Mail className="h-5 w-5" />
            </Button>
        </div>
    )
}