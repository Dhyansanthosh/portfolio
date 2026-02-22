import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Projects from "./components/Projects";
import RevealSection from "./components/RevealSection";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0e0e11] text-slate-100">
      <PageLoader loading={loading} ownerName={portfolioData.owner.name} />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar owner={portfolioData.owner} />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-7 lg:px-10 lg:pt-24">
        <Element name="home">
          <Hero owner={portfolioData.owner} />
        </Element>

        <Element name="about">
          <RevealSection>
            <About summary={portfolioData.about} />
          </RevealSection>
        </Element>

        <Element name="skills">
          <RevealSection>
            <Skills skills={portfolioData.skills} />
          </RevealSection>
        </Element>

        <Element name="projects">
          <RevealSection>
            <Projects projects={portfolioData.projects} />
          </RevealSection>
        </Element>

        <Element name="stats">
          <RevealSection>
            <Stats stats={portfolioData.stats} />
          </RevealSection>
        </Element>

        <Element name="certifications">
          <RevealSection>
            <Certifications certifications={portfolioData.certifications} />
          </RevealSection>
        </Element>

        <Element name="contact">
          <RevealSection>
            <Contact owner={portfolioData.owner} contact={portfolioData.contact} />
          </RevealSection>
        </Element>
      </main>
    </div>
  );
}