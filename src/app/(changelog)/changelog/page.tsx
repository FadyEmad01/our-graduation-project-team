"use client"

import { useMemo } from "react"
import { changelogData } from "@/constants/changelog-data"
import { formatDate } from "date-fns"

export default function ChangelogPage() {
  // Sort changelogs by date (newest first)
  const sortedChangelogs = useMemo(() => {
    return changelogData.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-5xl mx-auto relative">
          <div className="p-3 flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10">
        <div className="relative">
          {sortedChangelogs.map((changelog, i) => {
            const Body = changelog.body
            const formattedDate = formatDate(new Date(changelog.date), "MMMM d, yyyy")

            return (
              <div key={i} className="relative">
                <div className="flex flex-col md:flex-row gap-y-6">
                  {/* Left - Date & version */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="md:sticky md:top-8 pb-10">
                      <time className="text-sm font-medium text-muted-foreground block mb-3">
                        {formattedDate}
                      </time>

                      {changelog.version && (
                        // <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-bold">
                        //   {changelog.version}
                        // </div>
                        <div className="inline-flex relative z-10 items-center justify-center px-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-lg font-mono">
                          {changelog.version}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 md:pl-8 relative pb-10">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                      <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary border border-background rounded-full z-10" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="relative z-10 flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {changelog.title}
                        </h2>

                        {changelog.tags && changelog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {changelog.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex relative z-10 items-center justify-center px-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-lg font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 🧩 The custom content (like TactixComparison) */}
                      <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight">
                        <Body />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
