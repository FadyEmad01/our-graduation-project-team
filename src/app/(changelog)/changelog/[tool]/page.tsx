import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import GoBackButton from "@/app/(team)/team/components/GoBackButton";
import { FileSearch } from "lucide-react";

const pdfData: Record<string, { title: string; description: string; pdfUrl: string }> = {
    tactix: {
        title: "Tactix — Advanced AI-Powered Sports Analysis",
        description:
            "Tactix offers AI-assisted tagging, interactive tactical boards, and automated reports. It integrates seamlessly across web platforms and provides powerful collaboration features.",
        pdfUrl: "/pdfs/competitors-feature-based-comparison.pdf", // move your uploaded PDF to public/pdfs/tactix.pdf
    },
    longomatch: {
        title: "LongoMatch — Open Source Sports Video Analysis",
        description:
            "LongoMatch provides manual event tagging with categories and timestamps, aimed at amateur to semi-pro analysts.",
        pdfUrl: "/pdfs/competitors-feature-based-comparison.pdf",
    },
    metrica: {
        title: "Metrica Sports — Data-Driven Game Analysis",
        description:
            "Metrica Sports offers cloud collaboration and separate tactical drawing tools for in-depth analysis.",
        pdfUrl: "/pdfs/competitors-feature-based-comparison.pdf",
    },
    hudl: {
        title: "Hudl Sportscode — Professional Analysis for Elite Teams",
        description:
            "Hudl Sportscode is designed for professional clubs and federations, with advanced tagging and cloud integration.",
        pdfUrl: "/pdfs/competitors-feature-based-comparison.pdf",
    },
}

export default async function ToolDetails({ params }: { params: Promise<{ tool: string }> }) {
    const { tool } = await params
    const toolData = pdfData[tool]

    //   if (!tool) return notFound()
    if (!toolData) return (
        <Empty className="from-muted/50 to-background h-screen w-screen bg-gradient-to-b from-30%">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FileSearch />
                </EmptyMedia>
                <EmptyTitle>Tool Not Found</EmptyTitle>
                <EmptyDescription>
                    Sorry, we couldn&apos;t find the tool or competitor you&apos;re looking for.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <GoBackButton />
            </EmptyContent>
        </Empty>
    );

    return (
        <section className="max-w-3xl mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-4">{toolData.title}</h1>
            <p className="text-muted-foreground mb-6">{toolData.description}</p>

            <div className="border rounded-2xl p-4 bg-muted/40">
                <iframe
                    src={toolData.pdfUrl}
                    className="w-full h-[80vh] rounded-lg border"
                    title={toolData.title}
                />
            </div>

            <div className="mt-6">
                <Button asChild variant="outline">
                    <Link href="/changelog">← Back to Comparison</Link>
                </Button>
            </div>
        </section>
    )
}
