"use client";

import { Member } from "@/types/member";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function TeamGrid({ members }: { members: Member[] }) {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, index) => (
                    <Link
                        href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                        key={index}
                    >
                        <div
                            className={`group overflow-hidden cursor-pointer ${activeCard === index ? "is-active" : ""
                                }`}
                            onClick={() => handleCardClick(index)}
                        >
                            <Image
                                className={`h-96 w-full rounded-xl object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-2xl ${activeCard === index ? "grayscale-0 !h-[22.5rem] !rounded-2xl" : ""
                                    }`}
                                src={member.avatar}
                                alt={member.name}
                                width={826}
                                height={1239}
                                placeholder="blur"
                                blurDataURL={member.blurDataURL}
                            />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3
                                        className={`text-base font-medium capitalize transition-all duration-500 group-hover:tracking-wider ${activeCard === index ? "tracking-wider" : ""
                                            }`}
                                    >
                                        {member.name}
                                    </h3>
                                    <span className="text-xs">_0{index + 1}</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span
                                        className={`text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${activeCard === index ? "!translate-y-0 !opacity-100" : ""
                                            }`}
                                    >
                                        {member.role}
                                    </span>
                                    {/* <span
                                    className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                    {' '}
                                    Learn more
                                </span> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}
