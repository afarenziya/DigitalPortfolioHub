import React from "react";
import { Button } from "@/components/ui/button";

interface Service {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: "fa-code",
    iconColor: "text-primary",
    title: "Web Development",
    description: "Creating responsive, performant websites and web applications optimized for user experience and search engines.",
    tags: ["React", "Next.js", "Tailwind", "Node.js"]
  },
  {
    icon: "fa-bullhorn",
    iconColor: "text-secondary",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, engagement, and conversion rates across digital channels.",
    tags: ["SEO", "Content Marketing", "PPC", "Analytics"]
  },
  {
    icon: "fa-share-alt",
    iconColor: "text-primary-light",
    title: "Social Media Management",
    description: "Strategic social media planning, content creation, and community management to build your brand presence.",
    tags: ["Content Strategy", "Community", "Analytics", "Growth"]
  },
  {
    icon: "fa-palette",
    iconColor: "text-secondary-light",
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality to create intuitive, engaging digital experiences.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: "fa-robot",
    iconColor: "text-primary",
    title: "AI Integration",
    description: "Implementing AI solutions to automate processes, enhance user experiences, and provide data-driven insights.",
    tags: ["Chatbots", "Recommendation Systems", "Content Generation", "Analytics"]
  },
  {
    icon: "fa-pen-fancy",
    iconColor: "text-secondary",
    title: "Content Creation",
    description: "Compelling, SEO-optimized content that engages your audience and supports your marketing goals.",
    tags: ["Copywriting", "Blog Posts", "Social Media", "Video"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              AI-Enhanced
            </span>{" "}
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging cutting-edge technology to deliver exceptional results across multiple digital disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 border border-muted/20 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center mb-5 relative z-10">
                <i className={`fas ${service.icon} ${service.iconColor} text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3 relative z-10">{service.title}</h3>
              
              <p className="text-muted-foreground mb-5 relative z-10">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors duration-300 relative z-10"
              >
                Learn more
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          ))}
        </div>

        {/* AI-powered service recommendation */}
        <div className="mt-16 bg-muted rounded-xl p-6 border border-muted/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full filter blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                  <i className="fas fa-lightbulb text-white"></i>
                </div>
                <h3 className="text-xl font-heading font-semibold">AI Service Recommendation</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Share your business needs, and our AI will recommend the perfect service package tailored to your goals and industry.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <Button
                className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                asChild
              >
                <a href="#contact">Get AI Recommendation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
