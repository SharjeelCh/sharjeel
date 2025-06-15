"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

export default function Home() {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (
  <main className="min-h-screen">
   <Navbar />
   <Hero />
   <About />
   <Experience />
   <Skills />
   <Projects />
   <Contact />
  </main>
 );
}
