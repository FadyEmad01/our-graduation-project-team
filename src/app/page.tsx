import { Button } from "@/components/ui/button";
import { CrowdCanvas } from "@/components/ui/skiper-ui/CrowdCanvas";
import { Link as MyLink } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center z-50">
        <Button asChild variant="outline" size="sm">
          <Link href="/team">View our team</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 h-full w-screen">
        <CrowdCanvas src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png" rows={15} cols={7} />
      </div>
    </div>
  );
}
