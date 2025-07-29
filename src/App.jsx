import "./App.css";
import { div } from "motion/react-client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/resizable-navbar";
import { useState } from "react";
import LightRays from "./components/useableComponents/lightRays";
import { TimelineDemo } from "./components/useableComponents/TimelineDemo";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
        }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={2}
          lightSpread={5}
          rayLength={8}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0}
          className="custom-rays"
        />
      </div>
      <div className=" w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton
                variant="primary"
                download
                href="src/assets/Basavaraj_Resume.pdf">
                Download Resume
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative dark:text-neutral-300">
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                  href="src/assets/Basavaraj_Resume.pdf"
                  download>
                  Download Resume
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <Home />
        <About />
        <TimelineDemo />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
