import React from "react";
import { Link } from "wouter";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
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
            
            <p className="text-muted-foreground mb-6">
              Blending cutting-edge development, strategic marketing, and AI technology to create exceptional digital experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Social Media Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">AI Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <a href="mailto:hello@devportfolioai.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">hello@devportfolioai.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-primary mt-1 mr-3"></i>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-muted-foreground">San Francisco, California, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DevPortfolioAI. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
