import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const Home = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for navbar
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber="+919315869313" />
      <ScrollToTop />
    </div>
  );
};

export default Home;
