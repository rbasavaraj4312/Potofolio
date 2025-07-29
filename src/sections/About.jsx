"use client";
import React from "react";
import Award from "../components/useableComponents/Award";
import ScrollFloat from "../components/ui/ScrollFloat.jsx";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp.jsx";
import photo2 from "../assets/photo2.png";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex flex-col items-center py-16 pt-32 animate-fade-in">
      <LampContainer>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-slate-300 to-slate-400 py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent">
          About Me
        </motion.h1>

        {/* Flex Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 md:px-6 py-10">
          {/* Image - hidden on mobile */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src={photo2}
              alt="Basavaraj's Photo"
              className="rounded-lg shadow-lg object-cover max-w-[280px] md:max-w-[350px]"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left leading-loose space-y-5">
            <p className="text-xl font-bold text-cyan-500">I'm a Developer</p>

            <p className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=75%"
                scrollEnd="bottom bottom-=30%"
                stagger={0.05}>
                I Develop Applications Which Actually Matter
              </ScrollFloat>
            </p>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              I excel at teamwork, leadership, and problem-solving in
              collaborative environments. My communication and adaptability make
              me effective in delivering results with any team.
            </p>

            <a
              href="/files/Basavaraj_Resume.pdf"
              download
              className="inline-block px-6 py-2 rounded-lg text-white font-bold 
              bg-gradient-to-r from-gray-500 via-gray-700 to-gray-600 
              animate-gradient bg-[length:200%_200%] hover:scale-105 transition-all duration-300">
              📄 Download Resume
            </a>
          </div>
        </div>
      </LampContainer>

      {/* Extra Activities Section */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=65%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.05}>
          Extra Curricular Activities
        </ScrollFloat>
      </motion.h2>

      <Award />
    </div>
  );
};

export default About;
