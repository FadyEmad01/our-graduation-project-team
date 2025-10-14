"use client"

import { Button } from "@/components/ui/button"
import { Cpu, Sparkles } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* -------------------- ICON HELPERS -------------------- */
const YesIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("size-4 text-green-500 inline-block", className)}
    >
        <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
        />
    </svg>
)

const NoIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("size-4 text-red-500 inline-block", className)}
    >
        <path
            fillRule="evenodd"
            d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
        />
    </svg>
)

/* -------------------- TABLE DATA -------------------- */
const tableData = [
    {
        feature: "Video Tagging & Annotation",
        tactix: true,
        longo: true,
        metrica: true,
        hudl: true,
    },
    {
        feature: "Tactical Board",
        tactix: true,
        longo: false,
        metrica: true,
        hudl: false,
    },
    {
        feature: "Automated Match Reports",
        tactix: true,
        longo: false,
        metrica: false,
        hudl: false,
    },
    {
        feature: "Collaboration & Sharing",
        tactix: true,
        longo: false,
        metrica: true,
        hudl: true,
    },
    {
        feature: "Data Export (PDF/Word)",
        tactix: true,
        longo: true,
        metrica: false,
        hudl: true,
    },
    {
        feature: "Cross-Platform Access",
        tactix: "Web-based",
        longo: "Windows / Linux / macOS",
        metrica: "Web + Desktop",
        hudl: "macOS only",
    },
    {
        feature: "Ease of Use (UI)",
        tactix: "Modern, AI-guided",
        longo: "Technical for new users",
        metrica: "Clean UI",
        hudl: "Complex (pro use)",
    },
]

/* -------------------- COMPONENT -------------------- */
export default function TactixComparison() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[220vw] border-separate border-spacing-x-3 md:w-full">
                        {/* ---------- HEADER ---------- */}
                        <thead className="bg-background sticky top-0">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-1/5"></th>

                                {/* 🟢 Tactix */}
                                <th className="bg-green-700 text-white rounded-t-(--radius) space-y-3 px-4">
                                    <span className="block font-semibold text-nowrap">Tactix</span>
                                    <Button asChild size="sm" variant="default">
                                        <Link href="/changelog/tactix">Learn More</Link>
                                    </Button>
                                </th>

                                <th className="space-y-3">
                                    <span className="block font-semibold text-nowrap">LongoMatch</span>
                                    <Button asChild variant="outline" size="sm">
                                        <Link href="/changelog/longomatch">Learn More</Link>
                                    </Button>
                                </th>

                                <th className="space-y-3">
                                    <span className="block font-semibold text-nowrap">Metrica Sports</span>
                                    <Button asChild variant="outline" size="sm">
                                        <Link href="/changelog/metrica">Learn More</Link>
                                    </Button>
                                </th>

                                <th className="space-y-3">
                                    <span className="block font-semibold text-nowrap">Hudl Sportscode</span>
                                    <Button asChild variant="outline" size="sm">
                                        <Link href="/changelog/hudl">Learn More</Link>
                                    </Button>
                                </th>
                            </tr>
                        </thead>

                        {/* ---------- BODY ---------- */}
                        <tbody className="text-sm">
                            {/* ---- Section Header ---- */}
                            <tr className="*:py-3 border-b">
                                <td className="flex items-center gap-2 font-medium">
                                    <Cpu className="size-4" />
                                    <span>Core Features</span>
                                </td>
                                <td className="bg-green-700 border-none px-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            {/* ---- Standard Rows ---- */}
                            {tableData.map((row, i) => (
                                <tr key={i} className="*:border-b *:py-4">
                                    <td className="font-medium text-muted-foreground">
                                        {row.feature}
                                    </td>

                                    {/* 🟢 Tactix column */}
                                    <td className="bg-green-700 border-none px-4 text-center text-white">
                                        {typeof row.tactix === "boolean" ? (
                                            row.tactix ? (
                                                <YesIcon className="mx-auto text-white" />
                                            ) : (
                                                <NoIcon className="mx-auto" />
                                            )
                                        ) : (
                                            row.tactix
                                        )}
                                    </td>

                                    <td className="text-center text-muted-foreground">
                                        {typeof row.longo === "boolean" ? (
                                            row.longo ? (
                                                <YesIcon className="mx-auto" />
                                            ) : (
                                                <NoIcon className="mx-auto" />
                                            )
                                        ) : (
                                            row.longo
                                        )}
                                    </td>

                                    <td className="text-center text-muted-foreground">
                                        {typeof row.metrica === "boolean" ? (
                                            row.metrica ? (
                                                <YesIcon className="mx-auto" />
                                            ) : (
                                                <NoIcon className="mx-auto" />
                                            )
                                        ) : (
                                            row.metrica
                                        )}
                                    </td>

                                    <td className="text-center text-muted-foreground">
                                        {typeof row.hudl === "boolean" ? (
                                            row.hudl ? (
                                                <YesIcon className="mx-auto" />
                                            ) : (
                                                <NoIcon className="mx-auto" />
                                            )
                                        ) : (
                                            row.hudl
                                        )}
                                    </td>
                                </tr>
                            ))}

                            {/* ---------- AI-Powered Insights Section ---------- */}
                            <tr className="*:pb-3 *:pt-8">
                                <td className="flex items-center gap-2 font-medium">
                                    <Sparkles className="size-4 text-white" />
                                    <span className="text-nowrap">AI-Powered Insights</span>
                                </td>
                                <td className="bg-green-700 border-none px-4 text-center text-white">
                                    <YesIcon className="mx-auto text-white" />
                                </td>
                                <td className="text-center">
                                    <NoIcon className="mx-auto" />
                                </td>
                                <td className="text-center">
                                    <NoIcon className="mx-auto" />
                                </td>
                                <td className="text-center">
                                    <NoIcon className="mx-auto" />
                                </td>
                            </tr>

                            {/* ---- Bottom Spacer ---- */}
                            <tr className="*:py-6">
                                <td></td>
                                <td className="bg-green-700 rounded-b-(--radius) border-none px-4"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
