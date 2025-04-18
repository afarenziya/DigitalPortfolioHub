import React from "react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden border border-muted/30 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&h=1000" 
                  alt="Portrait of a web developer and digital marketer" 
                  className="w-full h-auto"
                />
                
                {/* Overlay elements */}
                <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/30 z-30">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="text-foreground font-medium">Available for projects</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent h-1/3"></div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-card rounded-xl p-4 border border-muted/20 text-center">
                  <h4 className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">7+</h4>
                  <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-muted/20 text-center">
                  <h4 className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">50+</h4>
                  <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-muted/20 text-center">
                  <h4 className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">20+</h4>
                  <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-primary text-sm font-medium mb-4">
              <div className="flex h-2 w-2 rounded-full bg-primary mr-2"></div>
              About Me
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Blending{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                technology & creativity
              </span>{" "}
              to build exceptional digital experiences
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Hi, I'm Alex! I'm a full-stack developer and digital marketing specialist with a passion for creating AI-powered digital solutions that help businesses grow and succeed online.
            </p>
            
            <p className="text-muted-foreground mb-8">
              With over 7 years of experience working with startups and established businesses, I specialize in creating seamless, user-centered digital experiences that not only look beautiful but also drive real business results. I believe in the power of technology to transform how we interact with the digital world, and I'm particularly excited about the potential of AI to create more personalized, efficient digital experiences.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Modern Development Stack</h4>
                  <p className="text-muted-foreground">Expertise in React, Next.js, Node.js, TailwindCSS and modern JavaScript frameworks.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Data-Driven Marketing</h4>
                  <p className="text-muted-foreground">Strategic approach to digital marketing focused on measurable results and continuous optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <i className="fas fa-check text-primary text-sm"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">AI Implementation</h4>
                  <p className="text-muted-foreground">Integration of AI technologies to enhance digital products and marketing strategies.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                asChild
              >
                <a href="#contact">Let's Work Together</a>
              </Button>
              <Button
                variant="outline"
                className="bg-muted text-foreground px-8 py-3 rounded-full hover:bg-background border border-primary/30 transition-all duration-300 font-medium"
                asChild
              >
                <a href="#">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
