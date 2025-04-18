import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type ProjectCategory = "Web Development" | "UI/UX Design" | "Digital Marketing" | "AI Projects";

interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "ShopSmart AI",
    description: "E-commerce platform with AI-powered product recommendations and personalized shopping experiences.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Node.js", "TensorFlow"]
  },
  {
    title: "SocialPulse Analytics",
    description: "Comprehensive social media campaign with AI-driven analytics and content optimization.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=600&h=400",
    tags: ["Strategy", "Content", "Analytics"]
  },
  {
    title: "HealthTrack App",
    description: "Health and fitness tracking app with personalized AI coaching and intuitive user interface.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&h=400",
    tags: ["UX Research", "UI Design", "Prototyping"]
  },
  {
    title: "CustomerAI Assistant",
    description: "Advanced customer service chatbot with natural language processing and sentiment analysis.",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1622542796254-5b9c46ab0cf1?auto=format&fit=crop&w=600&h=400",
    tags: ["NLP", "Python", "React"]
  },
  {
    title: "PropTech Finder",
    description: "Real estate platform with virtual tours and AI-powered property recommendations.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
    tags: ["Next.js", "Firebase", "Three.js"]
  },
  {
    title: "FinTech Growth Campaign",
    description: "Comprehensive digital marketing strategy for a fintech startup that increased user acquisition by 200%.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=400",
    tags: ["SEO", "PPC", "Content"]
  }
];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Featured
            </span>{" "}
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work across web development, digital marketing, and AI integration.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Development", "UI/UX Design", "Digital Marketing", "AI Projects"].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category 
                  ? "bg-primary text-white" 
                  : "bg-muted text-foreground hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-muted/20 hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden" style={{ paddingTop: "70%" }}>
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-muted/30">
                  {project.category}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors duration-300">
                    View Case Study
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="inline-flex items-center bg-muted text-foreground px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};
