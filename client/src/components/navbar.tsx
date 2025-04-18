import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-background text-xs font-bold">AI</span>
              </div>
            </div>
            <span className="text-foreground font-heading font-semibold text-xl">
              DevPortfolio<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Testimonials
            </Link>
            <Link href="/#contact" className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 font-medium">
              Contact
            </Link>
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
        } bg-muted border-t border-muted/20`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
            Home
          </Link>
          <Link href="/#services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
            Services
          </Link>
          <Link href="/#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
            Portfolio
          </Link>
          <Link href="/#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
            About
          </Link>
          <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2">
            Testimonials
          </Link>
          <Link href="/#contact" className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 font-medium text-center">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
