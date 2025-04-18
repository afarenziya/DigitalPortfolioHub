import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingAnimation } from "@/components/ui/floating-animation";
import { GradientBackground } from "@/components/ui/gradient-background";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <GradientBackground>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-primary text-sm font-medium">
                <div className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                AI-Powered Development & Marketing
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Crafting{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Digital Experiences
                </span>{" "}
                Powered by Intelligence
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                Combining cutting-edge development, strategic marketing, and artificial intelligence to build powerful digital solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-full text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                  asChild
                >
                  <a href="#portfolio">View My Work</a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-muted text-foreground px-8 py-6 rounded-full text-center hover:bg-background border border-primary/30 transition-all duration-300 font-medium"
                  asChild
                >
                  <a href="#contact">Let's Connect</a>
                </Button>
              </div>

              <div className="pt-6 flex items-center space-x-6">
                <p className="text-muted-foreground font-medium">Follow me on:</p>
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
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Animated code blocks */}
                <FloatingAnimation 
                  className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-muted rounded-xl p-4 shadow-lg z-10" 
                  rotation={6}
                >
                  <div className="h-3 w-3/4 bg-primary/40 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-primary/30 rounded mb-2"></div>
                  <div className="h-3 w-5/6 bg-primary/20 rounded"></div>
                  <div className="mt-3">
                    <div className="h-3 w-full bg-background rounded mb-1"></div>
                    <div className="h-3 w-4/5 bg-background rounded mb-1"></div>
                    <div className="h-3 w-2/3 bg-background rounded"></div>
                  </div>
                </FloatingAnimation>

                <FloatingAnimation 
                  className="absolute bottom-0 right-0 w-36 h-36 md:w-44 md:h-44 bg-muted rounded-xl p-4 shadow-lg z-10" 
                  rotation={-3}
                  delay={1000}
                >
                  <div className="h-3 w-1/2 bg-secondary/40 rounded mb-2"></div>
                  <div className="h-3 w-3/4 bg-secondary/30 rounded mb-2"></div>
                  <div className="h-3 w-1/3 bg-secondary/20 rounded"></div>
                  <div className="mt-3">
                    <div className="h-3 w-full bg-background rounded mb-1"></div>
                    <div className="h-3 w-3/4 bg-background rounded mb-1"></div>
                    <div className="h-3 w-5/6 bg-background rounded"></div>
                  </div>
                </FloatingAnimation>

                {/* Main image with glow effect */}
                <div className="relative rounded-2xl overflow-hidden border border-muted/50 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?auto=format&fit=crop&q=80&w=800&h=1000" 
                    alt="Developer working with AI visualizations" 
                    className="w-full h-auto relative z-10 mix-blend-luminosity opacity-90"
                  />
                  <div className="absolute inset-0 bg-background/30 z-20"></div>
                  
                  {/* AI overlay elements */}
                  <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/30 z-30 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-primary text-sm font-medium">AI Analysis Active</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-muted/30 z-30">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <i className="fas fa-robot text-white text-xs"></i>
                      </div>
                      <div className="h-3 w-1/3 bg-primary/40 rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded mb-1"></div>
                    <div className="h-2 w-5/6 bg-muted rounded mb-1"></div>
                    <div className="h-2 w-2/3 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
};
