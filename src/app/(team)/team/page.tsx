import { MEMBERS } from "@/constants/team";
import { addBlurToMembers } from "@/lib/getPlaiceholder";
import TeamGrid from "./components/TeamGrid";

export default async function TeamSection() {
  const membersWithBlur = await addBlurToMembers(MEMBERS);

  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>

        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.
            </p>
          </div>
        </div>

        {/* Client logic is isolated here */}
        <TeamGrid members={membersWithBlur} />
      </div>
    </section>
  );
}
