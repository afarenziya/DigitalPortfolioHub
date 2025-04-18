import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ajay Farenziya",
    title: "Co-Founder & CEO",
    image: "/team/ajay.jpg"
  },
  {
    name: "Madhuri",
    title: "Co-Founder",
    image: "/team/madhuri.jpg"
  },
  {
    name: "Abhishek",
    title: "AI Web Developer",
    image: "/team/abhishek.svg"
  },
  {
    name: "Preeti",
    title: "Marketing Head",
    image: "/team/preeti.svg"
  },
  {
    name: "Vijay",
    title: "Data Scientist",
    image: "/team/vijay.svg"
  },
  {
    name: "Nisha",
    title: "CFO",
    image: "/team/nisha.svg"
  }
];

export const TeamSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((current) => (current === teamMembers.length - 1 ? 0 : current + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? teamMembers.length - 1 : current - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    // Start autoplay
    interval.current = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean up interval on component unmount
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  // Stop autoplay on hover
  const stopAutoplay = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  // Resume autoplay when mouse leaves
  const resumeAutoplay = () => {
    if (!interval.current) {
      interval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={stopAutoplay}
      onMouseLeave={resumeAutoplay}
      ref={sliderRef}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-card rounded-xl p-6 border border-muted/20 flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-40 h-40 mb-4 rounded-full object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.title}</p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-background/80 border border-muted/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
        size="icon"
        variant="outline"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </Button>
      
      <Button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-background/80 border border-muted/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
        size="icon"
        variant="outline"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-primary" : "bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};