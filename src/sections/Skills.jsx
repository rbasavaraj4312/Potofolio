import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiExpress } from "react-icons/si";
import CurvedLoop from "../components/ui/CurvedLoop.jsx";
import CardSpotlight from "../components/ui/CardSpotlight.jsx";

import { Boxes } from "../components/ui/background-boxes";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      title: "Concepts",
      skills: [
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "OOP" },
        { name: "DBMS" },
      ],
    },
  ];

  return (
    <section id="skills" className=" text-white pt-20">
      <div className=" relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute -inset-1 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        {/*  */}
        <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-5xl lg:text-5xl font-bold text-center text-white relative z-20 uppercase">
            Skills
          </h1>
          <div className="w-[40rem] relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[18px] w-3/4 blur-md" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[15px] w-1/4 blur-md" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

        <CurvedLoop
          marqueeText="C ✦ C++ ✦ Java ✦ Python ✦"
          speed={2}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="custom-text-style-2"
        />

        <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 grid-rows-1 gap-4 md:gap-6 md:grid-cols-2 md:grid-rows-2">
            {skillCategories.map((category, index) => (
              <CardSpotlight key={index} className=" w-80 text-center">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  {category.title}
                </p>

                <div className="text-neutral-200 mt-4 relative z-20">
                  <ul className="list-none mt-10 space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex gap-2 text-lg">
                        {skill.icon && (
                          <span className="text-2xl">{skill.icon}</span>
                        )}
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>

        <CurvedLoop
          marqueeText="HTML ✦ CSS ✦ JS ✦ React ✦ Node.js ✦ Express.js ✦ MongoDB ✦"
          speed={2}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="custom-text-style"
        />
      </div>
    </section>
  );
}
