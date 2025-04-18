import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Please agree to the privacy policy",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to learn more? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-card rounded-xl p-8 border border-muted/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-primary text-sm font-medium mb-4">
                  <div className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                  Contact Information
                </div>
                
                <h3 className="text-2xl font-heading font-semibold mb-6">Let's bring your ideas to life</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">Email</h4>
                      <a href="mailto:hello@devportfolioai.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        hello@devportfolioai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">San Francisco, California, USA</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-muted/30">
                  <h4 className="text-foreground font-medium mb-4">Connect on social media:</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="#" className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300">
                      <i className="fab fa-dribbble text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-xl p-8 border border-muted/20">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-primary text-sm font-medium mb-4">
                <div className="flex h-2 w-2 rounded-full bg-primary mr-2"></div>
                Send a Message
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="w-full bg-muted border border-muted/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      className="w-full bg-muted border border-muted/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6 space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?" 
                    className="w-full bg-muted border border-muted/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                  />
                </div>
                
                <div className="mb-6 space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..." 
                    className="w-full bg-muted border border-muted/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-none"
                  />
                </div>
                
                <div className="mb-6 flex items-start space-x-2">
                  <Checkbox 
                    id="privacy" 
                    checked={formData.privacy}
                    onCheckedChange={handleCheckboxChange}
                    className="h-5 w-5 rounded data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Label htmlFor="privacy" className="text-muted-foreground">
                    I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
