import React from "react"; 
import { cn } from "@/lib/utils"; 
import { Menu, X } from "lucide-react"; 
import { useEffect, useState } from "react"; 
import ThemeToggle from "./ThemeToggle";

const navItems = [ 
  { name: "Home", href: "#hero" }, 
  { name: "About", href: "#about" }, 
  { name: "Skills", href: "#skills" }, 
  { name: "Projects", href: "#projects" }, 
  { name: "Contact", href: "#contact" }, 
]; 

export default function Navbar() { 
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => { 
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 10); 
    }; 

    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []); 

  return ( 
    <nav 
      className={cn( 
        "fixed w-full z-50 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" 
      )} 
    > 
   
      <div className="container flex items-center justify-between"> 
         
        <a 
          className="text-xl font-bold text-primary flex items-center" 
          href="#hero" 
          onClick={() => setIsMenuOpen(false)}
        > 
          <span className="relative z-10"> 
            <span className="text-glow text-foreground"> mahyarDev </span>{" "} 
            Portfolio 
          </span> 
        </a> 

        {/* desktop nav */} 
        <div className="hidden md:flex space-x-8 mx-auto"> 
          {navItems.map((item, key) => ( 
            <a 
              key={key} 
              href={item.href} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300" 
            > 
              {item.name} 
            </a> 
          ))} 
        </div> 

        
        <button 
          onClick={() => setIsMenuOpen((prev) => !prev)} 
          className=" md:hidden p-2 text-foreground z-50 absolute left-[72%]" 
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
        > 
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
        </button> 

        
        <div 
          className={cn(
            "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40",
            "transition-all duration-300 md:hidden",
            isMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible"
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        >
          {/* mobile menu content */}
          <div 
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex flex-col space-y-8 text-xl text-center">
              {navItems.map((item, key) => ( 
                <a 
                  key={key} 
                  href={item.href} 
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMenuOpen(false)} 
                > 
                  {item.name} 
                </a> 
              ))} 
            </div> 
          </div>
        </div> 
        <ThemeToggle/>
      </div> 
    </nav> 
  ); 
}