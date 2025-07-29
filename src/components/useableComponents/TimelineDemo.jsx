import React from "react";
import { Timeline } from "../ui/Timeline.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";

export function TimelineDemo() {
  const data = [
    {
      title: "B.Tech in Information Science & Engineering",
      content: (
          <p className="text-neutral-400 text-lg md:text-lg max-w-xl">
            <span className="font-bold">Collage Name</span> : Rao Bahadur Y
            Mahabaleswarappa Engineering College
            <br /> <span className="font-bold">City</span> : Ballari, Karnataka
            <br /> <span className="font-bold">CGPA</span> : 8.33/10
            <br /> <span className="font-bold">Branch</span> : Information
            Science & Engineering
            <br /> <span className="font-bold">Duration</span> : 4 years
            <br /> Currently pursuing (2022 - Present)
          </p>
      ),
    },
    {
      title: "Class XII (PUC)",
      content: (
        <p className="text-neutral-400 text-lg md:text-lg max-w-xl">
          <span className="font-bold">Collage Name</span> : Nandi PU College,
          Karnataka
          <br /> <span className="font-bold">Board</span> : CBSE
          <br /> <span className="font-bold">City</span> : Ballari, Karnataka
          <br /> <span className="font-bold">Percentage</span> : 80.33%
          <br /> <span className="font-bold">Completed</span> : 2021
        </p>
      ),
    },
    {
      title: "Class X (SSLC)",
      content: (
        <p className="text-neutral-400 text-lg md:text-lg max-w-xl">
          <span className="font-bold">School Name</span> : St. Joseph’s English
          Medium High School
          <br /> <span className="font-bold">Board</span> : CBSE
          <br /> <span className="font-bold">City</span> : Ballari, Karnataka
          <br /> <span className="font-bold">Percentage</span> : 77.12%
          <br /> <span className="font-bold">Completed</span> : 2019
        </p>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
