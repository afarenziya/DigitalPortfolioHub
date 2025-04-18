import React from "react";
import { ClientSlider } from "@/components/ui/client-slider";

export const Clients = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Industry Leaders
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've had the privilege of working with amazing clients across various industries.
          </p>
        </div>
        
        <ClientSlider />
      </div>
    </section>
  );
};