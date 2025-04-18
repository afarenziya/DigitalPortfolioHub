import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial state
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Function to handle smooth scrolling for hash links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Account for fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', `/#${sectionId}`);
    }
    
    // Close mobile menu
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-background/50 backdrop-blur-sm"
    } border-b border-muted/30`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/#home" className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="DevPortfolioAI Logo" className="w-10 h-10" />
            <span className="text-foreground font-heading font-semibold text-xl">
              DevPortfolio<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 ml-16">
            <a 
              href="/#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="/#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a 
              href="/#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </a>
            <a 
              href="/#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="/#testimonials" 
              onClick={(e) => scrollToSection(e, 'testimonials')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Testimonials
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Phone Number Button */}
          <div className="hidden md:block">
            <a 
              href="tel:+919315869313" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 font-medium flex items-center"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              +91 93158 69313
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-card/90 backdrop-blur-md border-t border-muted/20`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="/#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            Home
          </a>
          <a 
            href="/#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            Services
          </a>
          <a 
            href="/#portfolio" 
            onClick={(e) => scrollToSection(e, 'portfolio')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            Portfolio
          </a>
          <a 
            href="/#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            About
          </a>
          <a 
            href="/#testimonials" 
            onClick={(e) => scrollToSection(e, 'testimonials')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            Testimonials
          </a>
          <a 
            href="/#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
          >
            Contact
          </a>
          <a 
            href="tel:+919315869313" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 font-medium text-center"
          >
            <i className="fas fa-phone-alt mr-2"></i>
            +91 93158 69313
          </a>
        </div>
      </div>
    </nav>
  );
};
