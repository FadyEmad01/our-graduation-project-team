import TactixComparison from "@/app/(changelog)/changelog/components/TactixComparison"


export interface ChangelogItem {
  title: string
  date: string
  version?: string
  tags?: string[]
  body: React.ComponentType
}

export const changelogData: ChangelogItem[] = [
  {
    title: "Added Competitors Feature Based Comparison",
    date: "2025-10-8",
    version: "v0.1",
    tags: ["comparison" ,"front-end" ,"teams idea"],
    body: TactixComparison,
  },
  {
    title: "Initial User Flow",
    date: "2025-10-8",
    version: "v0.1",
    tags: ["ui/ux", "figma" ,"desgin"],
    body: () => (
      <div className="bg-[#EEEEF2] rounded-2xl">
        <img src="/images/user-flow.png" alt="user-flow" />
      </div>
    ),
  },
]
