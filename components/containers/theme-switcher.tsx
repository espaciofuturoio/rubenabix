"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

const ModeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const isDarkMode = theme === "dark"

    return (
        <div className="flex items-center">
            <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
            <Switch
                checked={isDarkMode}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                className="transition-all"
            />
            <Moon className="h-[1.2rem] w-[1.2rem] ml-2" />
        </div>
    )
}

export default ModeToggle