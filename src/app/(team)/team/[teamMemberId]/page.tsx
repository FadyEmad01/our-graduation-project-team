import { Metadata } from "next";
import Image from "next/image";
import { MEMBERS } from "@/constants/team";
import { METADATA } from "@/constants/metadata/website";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, RefreshCcwIcon, UserRoundX } from "lucide-react";
import GoBackButton from "../components/GoBackButton";
import Container from "@/components/Container";
import { addBlurToMembers } from "@/lib/getPlaiceholder";

interface TeamPageProps {
  params: Promise<{ teamMemberId: string }>;
}


/* -------------------------------------------------------------------------- */
/* 🧠 Generate Static Params (pre-render all member pages)                    */
/* -------------------------------------------------------------------------- */
export async function generateStaticParams() {
  return MEMBERS.map((member) => ({
    teamMemberId: member.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

/* -------------------------------------------------------------------------- */
/* 🧠 Generate Dynamic Metadata (SEO per member)                              */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { teamMemberId } = await params;
  const memberId = decodeURIComponent(teamMemberId);

  const member = MEMBERS.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === memberId.toLowerCase()
  );

  if (!member) {
    return {
      title: "Member Not Found | Seniors 2026",
      description: "This team member could not be found.",
    };
  }

  const title = `${member.name} — ${member.role} | Seniors 2026`;
  const description = `Meet ${member.name}, ${member.role} from the Seniors 2026 Computer Science team. Discover their role and contributions.`;

  return {
    ...METADATA,
    title,
    description,
    openGraph: {
      ...METADATA.openGraph,
      title,
      description,
      images: [
        {
          url: member.avatar,
          width: 800,
          height: 800,
          alt: `${member.name} profile photo`,
        },
      ],
      type: "profile",
    },
    twitter: {
      ...METADATA.twitter,
      title,
      description,
      images: [member.avatar],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* 🧩 Page Component                                                          */
/* -------------------------------------------------------------------------- */
export default async function TeamMemberPage({ params }: TeamPageProps) {
  const membersWithBlur = await addBlurToMembers(MEMBERS);
  const { teamMemberId } = await params;
  const memberId = decodeURIComponent(teamMemberId);

  const member = membersWithBlur.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === memberId.toLowerCase()
  );

  if (!member) {
    return (
      <Empty className="from-muted/50 to-background h-screen w-screen bg-gradient-to-b from-30%">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UserRoundX />
          </EmptyMedia>
          <EmptyTitle>Member Not Found</EmptyTitle>
          <EmptyDescription>
            Sorry, we couldn&apos;t find the team member you&apos;re looking for.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <GoBackButton />
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <>
      {/* ////////////// */}
      <Container>
        <section>
          <div className="h-52 mt-9">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              {member.coverImage && (
                <Image
                  fill
                  className="h-full w-full object-cover rounded-2xl"
                  src={member.coverImage}
                  placeholder="blur"
                  blurDataURL={member.coverImageBlur}
                  alt="cover image"
                  priority
                />
              )}
              {!member.coverImage && (
                <div className="h-full w-full object-cover rounded-2xl bg-primary"
                  style={{
                    filter: "brightness(60%) grayscale(30%)",
                    maskImage:
                      "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, transparent 0%, var(--foreground) 100%)",
                  }} />
              )}
            </div>
          </div>
          <div className="-mt-12 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-x-4 items-center">
              <div className="relative flex size-44 items-center justify-center overflow-hidden rounded-full border-[7px] border-background bg-muted shadow-sm shadow-black/10">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-center sm:items-start relative z-50">
                <h1 className="text-4xl mt-2 tracking-tight font-semibold">
                  {member.name}
                </h1>
                <p className="text-muted-foreground mt-1">{member.role}</p>
              </div>
            </div>
          </div>
          {/* <div className="sm:px-6 mt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="sm:col-span-1 col-span-full">
                <div className="w-full rounded-2xl bg-muted shadow px-4 py-3">
                  <p className="text-xl font-semibold">Social media</p>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <a
                      href="https://www.facebook.com/fady.emad.144181"
                      target="_blank"
                    >
                      <img
                        className="size-8"
                        src="/Facebook.svg"
                        alt="Fady Facebook"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fady-emad-sabry/"
                      target="_blank"
                    >
                      <img
                        className="size-8"
                        src="/Linkedin.svg"
                        alt="Fady Linkedin"
                      />
                    </a>
                    <a href="https://github.com/FadyEmad01" target="_blank">
                      <img
                        className="size-8"
                        src="/github.svg"
                        alt="Fady github"
                      />
                    </a>
                    <a href="https://wa.me/+201203289612" target="_blank">
                      <img
                        className="size-8"
                        src="/WhatsApp.svg"
                        alt="Fady WhatsApp"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </Container>


    </>

  );
}
