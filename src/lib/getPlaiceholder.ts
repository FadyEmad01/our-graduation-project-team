import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import { MEMBERS } from "@/constants/team";

export async function getBlurDataURL(src: string) {
  try {
    let buffer: Buffer;

    // Check if the image is local (starts with "/")
    if (src.startsWith("/")) {
      // Build absolute path to the public directory
      const imagePath = path.join(process.cwd(), "public", src);
      buffer = await fs.promises.readFile(imagePath);
    } else {
      // Remote image — fetch and convert to buffer
      const res = await fetch(src);
      if (!res.ok) throw new Error(`Failed to fetch image: ${src}`);
      buffer = Buffer.from(await res.arrayBuffer());
    }

    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (error) {
    console.error("Error generating blur data:", error);
    return undefined;
  }
}

export async function addBlurToMembers(members: typeof MEMBERS) {
  const membersWithBlur = await Promise.all(
    members.map(async (member) => ({
      ...member,
      blurDataURL: await getBlurDataURL(member.avatar),
    }))
  );
  return membersWithBlur;
}
