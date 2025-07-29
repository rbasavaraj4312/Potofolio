"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "1st in Coding Competition",
    description:
      "Secured the 1st place among 100+ participants in a college-wide coding competition, showcasing analytical thinking and precision under pressure.",

    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="src/assets/codeDebug.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="certificate"
        />
      </div>
    ),
  },
  {
    title: "1st in Technical Quiz",
    description:
      "Won the tech quiz, ranking 1st among 80+ students, demonstrating strong technical knowledge and quick decision making.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="src/assets/quiz.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="certificate"
        />
      </div>
    ),
  },
  {
    title: "Finalist in Smart India Hackathon",

    description:
      "Selected as a finalist in the Smart India Hackathon in college level, one of the top five teams out of over 40 teams, marks the beginning of my web development journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="src/assets/sih.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="certificate"
        />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
