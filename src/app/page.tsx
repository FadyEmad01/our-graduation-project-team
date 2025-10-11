import { Button } from "@/components/ui/button";
import { CrowdCanvas } from "@/components/ui/skiper-ui/CrowdCanvas";
import { Link as MyLink } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative h-svh w-screen flex justify-center items-center">
      <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center z-50">
        <Button asChild variant="outline" size="sm">
          <Link href="/team">View our team</Link>
        </Button>
      </div>
      <h1
        className="pointer-events-none block relative lg:-top-15 md:-top-20 -top-30 -z-10 w-full text-center text-[clamp(1rem,23vw,20rem)] leading-tight font-bold font-sans text-nowrap overflow-hidden"
        style={{
          filter: "brightness(60%) grayscale(30%)",
          maskImage:
            "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
        }}
      >
        TEAM 18
      </h1>
      <div className="absolute bottom-0 h-full w-screen overflow-hidden">
        <CrowdCanvas className="h-[80vh] sm:h-[90vh]" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png" rows={15} cols={7} />
      </div>
    </div>
  );
}
