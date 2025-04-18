import React from "react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  content: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Working with Alex was a game-changer for our business. The AI-powered website and marketing strategy they developed increased our conversions by 45%. Highly recommended!",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "The social media strategy and content creation services exceeded our expectations. Our audience engagement increased by 78% in just three months. Amazing work!",
    name: "David Thompson",
    title: "Marketing Director, Brand Global",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "The AI chatbot developed for our customer service saved us countless hours and improved our customer satisfaction ratings. A true professional who delivers results.",
    name: "Jennifer Martinez",
    title: "Head of Support, ServiceNow",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from people I've worked with on various projects and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-muted/20 relative">
              <div className="absolute -top-5 left-6">
                <div className="relative h-10 w-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-full">
                  <i className="fas fa-quote-left text-white"></i>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-foreground font-medium">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-xl p-8 border border-muted/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full filter blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-semibold mb-4">Ready to transform your digital presence?</h3>
              <p className="text-muted-foreground">
                Let's discuss how my services can help your business grow online and reach new heights with the power of AI.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <Button 
                className="block w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                asChild
              >
                <a href="#contact">Start a Project</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
