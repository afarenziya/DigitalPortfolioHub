import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Client {
  name: string;
  logo: string;
}

// Client logos with local SVG files
const clients: Client[] = [
  {
    name: "TechCo",
    logo: "/images/clients/client1.svg"
  },
  {
    name: "Innovate",
    logo: "/images/clients/client2.svg"
  },
  {
    name: "DigitalX",
    logo: "/images/clients/client3.svg"
  },
  {
    name: "WebFlex",
    logo: "/images/clients/client4.svg"
  },
  {
    name: "AIGroup",
    logo: "/images/clients/client5.svg"
  },
  {
    name: "TechBoost",
    logo: "/images/clients/client1.svg" // Reusing client1.svg for the last one
  }
];

export const ClientSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);

  // Calculate the number of items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((current) => {
      const maxIndex = clients.length - itemsToShow;
      return current >= maxIndex ? 0 : current + 1;
    });
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((current) => {
      const maxIndex = clients.length - itemsToShow;
      return current === 0 ? maxIndex : current - 1;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    // Start autoplay
    interval.current = setInterval(() => {
      nextSlide();
    }, 4000);

    // Clean up interval on component unmount
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [itemsToShow]);

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
      }, 4000);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={stopAutoplay}
      onMouseLeave={resumeAutoplay}
      ref={sliderRef}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)` }}
      >
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 px-4"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <div className="bg-card rounded-xl p-6 border border-muted/20 flex flex-col items-center justify-center h-32">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-16"
              />
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
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: clients.length - itemsToShow + 1 }).map((_, index) => (
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