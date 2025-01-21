  "use client"

  import { useState } from "react"
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Filter, Search } from "lucide-react"

  const tabs = [
    { name: "Project", count: 0 },
    { name: "Saved", count: 0 },
    { name: "Shared", count: 0 },
    { name: "Achievement", count: 0 },
  ]

  export function PortfolioTabs() {
    const [isActive, setIsActive] = useState<string>("Project")

    return (
      <div className="flex items-center justify-between border-b px-4">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              onClick={() => setIsActive(tab.name)}
              variant="ghost"
              className={cn(
                "relative px-2 py-4 text-sm font-medium rounded-none hover:bg-transparent",
                isActive === tab.name
                  ? "text-[#E84C3D] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#E84C3D]"
                  : "text-gray-400 hover:text-gray-300",
              )}
            >
              {tab.name}
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Filter className="h-5 w-5" />
          </Button>
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Search a project"
              className="w-[240px] bg-transparent text-black placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 text-gray-400 hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

