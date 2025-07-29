import React from "react";
import CircularText from "../components/ui/CircularText";
import photo from "../assets/photo.jpeg";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import git from "../assets/git.png";

const Home = () => {
  return (
    <section
      id="home"
      className="text-white min-h-screen flex items-center justify-center px-4">
      <div className="py-8 mx-auto max-w-screen-2xl lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* 🖼 IMAGE FIRST ON MOBILE */}
        <div className="relative flex justify-center items-center md:hidden">
          <div className="relative">
            <img
              src={photo}
              alt="Basavaraj's Photo"
              width="260"
              height="260"
              className="rounded-lg shadow-lg object-cover"
              loading="lazy"
            />

            <div className="absolute -top-3 -left-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-sm">
              4th Year Student
            </div>
            <div className="absolute bottom-3 -right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-sm">
              MERN Dev
            </div>
          </div>
        </div>

        {/* 📜 TEXT SECTION */}
        <div className="flex flex-col justify-center px-4 md:px-10">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl flex items-center gap-2">
            <span className="wave flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400 animate-wave">
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
              </svg>
              <span>
                Hi, I am <span className="text-blue-600">Basavaraj R</span>
              </span>
            </span>
          </h1>

          <p className="mb-6 text-lg text-gray-400">
            B.Tech student at RYMEC ✦ Full-Stack Web Developer ✦ DSA Enthusiast
          </p>

          <h3 className="mb-6 text-xl md:text-2xl text-gray-300 text-justify">
            I build full-stack solutions that solve real problems from{" "}
            <span className="text-blue-400 font-semibold">bus tracking</span> to{" "}
            <span className="text-blue-400 font-semibold">
              student platforms
            </span>
            . My focus is on creating impactful tech and writing{" "}
            <span className="text-blue-400 font-semibold">efficient code</span>.
          </h3>

          <div className="flex space-x-9">
            <a
              href="mailto:r.basavaraj0312@gmail.com"
              className="transition transform hover:scale-125">
              <img
                className="h-12 w-12 p-2 rounded-full bg-gray-300 hover:bg-red-400 shadow-lg transition-all duration-300"
                src={mail}
                alt="Mail Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/basavaraj-r-899248287/"
              target="_blank"
              className="transition transform hover:scale-125">
              <img
                className="h-12 w-12 p-2 rounded-full bg-gray-300 hover:bg-blue-500 shadow-lg transition-all duration-300"
                src={linkedin}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="https://github.com/rbasavaraj4312"
              target="_blank"
              className="transition transform hover:scale-125">
              <img
                className="h-12 w-12 p-2 rounded-full bg-gray-300 hover:bg-gray-50 shadow-lg transition-all duration-300"
                src={git}
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>

        {/* 🖼 IMAGE FOR DESKTOP (WITH CIRCULAR TEXT) */}
        <div className="relative justify-center items-center hidden md:flex">
          <div className="relative">
            <img
              src={photo}
              alt="Basavaraj's Photo"
              width="400"
              height="400"
              className="rounded-lg shadow-lg object-cover"
            />

            <div className="absolute -top-4 -left-12 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">4th</p>
              <p className="text-sm text-gray-300">Year College Student</p>
            </div>

            <div className="absolute bottom-12 -right-12 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">DSA Enthusiast</p>
              <p className="text-sm text-gray-300">C, C++</p>
            </div>

            <div className="absolute top-[20%] -right-28 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
              <p className="text-lg font-bold">Web Developer</p>
              <p className="text-sm text-gray-300">MERN</p>
            </div>

            {/* CircularText only visible on md+ */}
            <div className="absolute font-mono -bottom-[20%] -left-28 bg-black/5 backdrop-blur-md px-4 py-2 rounded-lg hidden md:block">
              <CircularText
                text="Creative ✦ Problem Solver ✦ Team Player ✦ "
                spinDuration={15}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
