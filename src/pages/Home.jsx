import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Projectsection from "../components/Projectsection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      
      {/* Background Effects */}
      <StarBackground/>

      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <Projectsection/>
        <ContactSection/>
        <Footer/>
        
      </main>

      {/* Footer */}
    </div>
  );
}
