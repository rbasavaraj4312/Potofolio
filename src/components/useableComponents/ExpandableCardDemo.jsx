"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../ui/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-3">
                    {active.codeLink && (
                      <motion.a
                        layoutId={`button-code-${active.title}-${id}`}
                        href={active.codeLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-gray-800 text-white hover:bg-gray-900 transition">
                        View Code
                      </motion.a>
                    )}

                    {active.liveLink && (
                      <motion.a
                        layoutId={`button-live-${active.title}-${id}`}
                        href={active.liveLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition">
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center text-white rounded-xl transition-transform cursor-pointer duration-500 ease-out 
hover:text-neutral-900 hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium  dark:text-neutral-200 text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-500 dark:text-neutral-400 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              {card.codeLink && (
                <motion.a
                  layoutId={`button-code-${card.title}-${id}`}
                  href={card.codeLink}
                  target="_blank"
                  className="px-3 py-2 text-sm rounded-full font-bold bg-gray-200 hover:bg-gray-300 text-black">
                  Code
                </motion.a>
              )}

              {card.liveLink && (
                <motion.a
                  layoutId={`button-live-${card.title}-${id}`}
                  href={card.liveLink}
                  target="_blank"
                  className="px-3 py-2 text-sm rounded-full font-bold bg-blue-500 hover:bg-blue-600 text-white">
                  Live
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "NextGen College Advisor",
    description: "KCET College Predictor",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg", // Change manually
    codeLink: "https://github.com/rbasavaraj4312/KCET-college-predictor",
    liveLink: "https://kcet-predictor-demo.vercel.app",
    content: () => (
      <p>
        KCET College Predictor is a web-based tool designed for Karnataka
        students to estimate admission chances based on KCET ranks, category,
        and branch preferences. It uses Linear Regression trained on past cutoff
        data and provides graphical recommendations.
        <br /> <br />
        Built with React.js, Node.js, Express, and MongoDB.
      </p>
    ),
  },

  {
    title: "Live Bus Tracker",
    description: "Live Bus Tracking System",
    src: "https://assets.aceternity.com/demos/metallica.jpeg", // Change manually
    codeLink: "https://github.com/rbasavaraj4312/Live-Bus-Tracking",
    // No live link yet
    content: () => (
      <p>
        Live Bus Tracking System enables real-time GPS tracking of buses for
        students and staff. It displays live locations on a map with dynamic
        updates for better convenience.
        <br /> <br />
        Built with React.js, Node.js, Express, and Firebase for real-time
        updates.
      </p>
    ),
  },
  {
    title: "Online Code Judge",
    description: "LeetCode-like Playground",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg", // Change manually
    codeLink: "https://github.com/rbasavaraj4312/Code-Playground", // Replace with correct repo
    // Add liveLink if deployed
    content: () => (
      <p>
        A full-stack coding platform similar to LeetCode that allows users to
        solve coding problems and execute code in real-time using Judge0 API.
        <br /> <br />
        Built with React.js (frontend) and Node.js/Express (backend), supports
        multiple programming languages.
      </p>
    ),
  },
  {
    title: "Quizo",
    description: "Quiz Management System",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg", // Change manually
    codeLink: "https://github.com/rbasavaraj4312/Quizo",
    liveLink: "https://quizo-rosy.vercel.app/",
    // No live link yet
    content: () => (
      <p>
        Quizo is an interactive quiz management platform where teachers can
        create quizzes and students can attempt them. It supports quiz CRUD
        operations and authentication with static credentials.
        <br /> <br />
        Built with React (Vite + Tailwind), Node.js, Express, and MongoDB.
      </p>
    ),
  },
];
