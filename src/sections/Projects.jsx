import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { image } from "motion/react-client";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projects = [
    {
      title: "NextGen College Advisor",
      description:
        "The KCET College Predictor is a web-based tool designed for Karnataka students preparing for or who have taken the KCET exam. It uses historical cutoff data from the past five years to predict admission chances based on a student’s rank, reservation category, and preferred branch. The system applies statistical analysis to provide a personalized list of colleges with probability scores for admission. Key features include rank-based predictions, multi-year cutoff analysis, category-aware results, and instant suggestions, helping students make informed decisions about their college preferences efficiently.",
      image: "../src/assets/kcet.png",
      github: "https://github.com/rbasavaraj4312/kcet-college-predictor",
      live: "https://kcet-college-predictor-ten.vercel.app/",
    },
    {
      title: "Live Bus Tracking System",
      description:
        "The Real-Time Bus Tracking System is a MERN stack project that provides accurate GPS-based bus location updates using LeafletJS, enhancing public transport efficiency. It includes three modules—Admin, Driver, and User. Admins can manage routes, drivers, and monitor bus locations, while drivers update their live locations via mobile devices. Users can track active buses in real time on an interactive map and search by route or bus number. The system uses Socket.IO for real-time communication, REST APIs for data handling, and MongoDB for storage, reducing passenger waiting times by improving visibility. This project helped me gain hands-on experience with real-time systems, state management, and full-stack development.",
      image: "../src/assets/bus.png",
      github: "https://github.com/rbasavaraj4312/bus-tracking",
      live: "",
    },
    {
      title: "NeoLearn Platform",
      description:
        "This project is a web-based platform aimed at improving technical skills and collaboration among engineering students by providing features like a secure coding environment with test cases and restrictions, an ATS-friendly resume builder, a hackathon team hub, a project tracking module for students and teachers, and an auto-evaluated lab exam system. Built with React, Node.js, Express, MongoDB, Tailwind CSS, Judge0 API, and Gemini API, it was inspired by the lack of practical coding experience and teamwork among students. The platform helps students actively practice coding, build resumes, collaborate on projects, and engage with teachers, ultimately enhancing learning outcomes and reducing manual effort in project and exam evaluation.",
      image: "../src/assets/neolearn.png",
      github: "https://github.com/rbasavaraj4312/NeoLearn",
      live: "",
    },
    {
      title: "Quizo",
      description:
        "Quizo is an online quiz management system that allows teachers to create, edit, schedule, and manage quizzes with features like setting titles, subjects, marks, timers, negative marking, and unidirectional mode, while also adding questions with multiple options and correct answers. Teachers can view student attempts and results in real time. Students can attend live quizzes, view their results, access a history of attempted quizzes, and review their answers compared to correct ones, with quizzes being auto-submitted if the timer expires or the tab/window is closed.",
      image: "../src/assets/quizo.png",
      github: "https://github.com/rbasavaraj4312/Quizo",
      live: "https://quizo-rosy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-neutral-950 py-16 px-6 mt-40 pt-40">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-4">
        Projects
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-40 scale-[0.98]"
                : "opacity-100"
            }`}>
            <ProjectCard project={project} reverse={index % 2 !== 0} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
