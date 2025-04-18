import React, { useEffect } from "react";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";

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
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
